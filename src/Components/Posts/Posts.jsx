import React, { useEffect, useState } from "react";
import "./Posts.css";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export async function extractKeywordsFromFirstSentence(docId) {
  const docRef = doc(db, "articles", docId);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    console.warn("Sənəd tapılmadı!");
    return;
  }
  const data = docSnap.data();
  const content = data?.content || "";
  if (!content) {
    console.warn("Məqalədə content sahəsi yoxdur.");
    return;
  }

  // 🔁 Köhnə keywords-ləri sil
  const keywordsRef = collection(db, "articles", docId, "keywords");
  const existingKeywords = await getDocs(keywordsRef);
  for (const keywordDoc of existingKeywords.docs) {
    await deleteDoc(keywordDoc.ref);
  }

  // ✂️ İlk cümlədən keywords çıxart
  const firstSentence = content.split(".")[0];
  const words = firstSentence
    .replace(/[.,?!]/g, "")
    .split(" ")
    .filter((word) => word.length > 3);

  const selectedWords = words.slice(0, 3);
  // console.log("Yeni keywords:", selectedWords);

  // ✅ Yeni keywords-ləri əlavə et
  for (const word of selectedWords) {
    const cleanWord = word.trim().toLowerCase();
    if (cleanWord && cleanWord.length < 150) {
      await addDoc(collection(db, "articles", docId, "keywords"), {
        keyword: cleanWord,
        createdAt: new Date(),
      });
    }
  }
}

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();

  const getPosts = async () => {
    try {
      const allPostsDb = await getDocs(collection(db, "articles"));

      const allPostsList = await Promise.all(
        allPostsDb.docs.map(async (docSnap) => {
          const data = docSnap.data();

          // Keywords-ləri düzgün subcollection yolundan al
          const keywordsSnapShot = await getDocs(
            collection(db, "articles", docSnap.id, "keywords")
          );
          const keywords = keywordsSnapShot.docs.map(
            (keyword) => keyword.data().keyword
          );

          return {
            id: docSnap.id,
            ...data,
            keywords: keywords.join(", "),
          };
        })
      );

      setAllPosts(allPostsList);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deleteArticle = async (docId) => {
    try {
      // 1. keywords subcollection-dakı sənədləri silək
      const keywordsSnapshot = await getDocs(
        collection(db, "articles", docId, "keywords")
      );
      const deleteKeywordsPromises = keywordsSnapshot.docs.map((keywordDoc) =>
        deleteDoc(doc(db, "articles", docId, "keywords", keywordDoc.id))
      );
      await Promise.all(deleteKeywordsPromises);

      // 2. Məqalə sənədini silək
      await deleteDoc(doc(db, "articles", docId));
      // 3. React state-də listdən silək
      const filteredElements = allPosts.filter((post) => post.id !== docId);
      setAllPosts(filteredElements);
    } catch (error) {
      console.error("Silərkən xəta baş verdi:", error);
    }
  };
  const editCategory = async (docId) => {
    const selectedArticle = await getDoc(doc(db, "articles", docId));
    if (selectedArticle.id === docId) {
      navigate(`/add-article/${selectedArticle.id}`);
    }
  };
  return (
    <div className="post-container">
      <div className="posts-intro">
        <h1>Məqalələr</h1>
        <button onClick={() => navigate("/add-article")}>
          Yeni məqalə əlavə et
        </button>
      </div>
      <div className="posts-list">
        <table className="post-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Başlıq</th>
              <th>Müəllif</th>
              <th>Tarix</th>
              <th>Kateqoriya</th>
              <th>Mətndən açar sözlər</th>
            </tr>
          </thead>
          <tbody>
            {allPosts.map((post, index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td>{post.name}</td>
                <td>{post.author}</td>
                <td>
                  {post.date && post.date.seconds
                    ? new Date(post.date.seconds * 1000).toLocaleString("az-AZ")
                    : "Tarix yoxdur"}
                </td>
                <td>{post.category}</td>
                <td>{post.keywords}</td>
                <td className="actions">
                  <button
                    className="edit-btn"
                    onClick={() => editCategory(post.id)}
                  >
                    Düzəliş
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteArticle(post.id)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Posts;

