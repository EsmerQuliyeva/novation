import React, { useEffect } from "react";
import "./AddArticle.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { db, storage } from "../../config/firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { extractKeywordsFromFirstSentence } from "../Posts/Posts";
import { useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const AddArticle = () => {
  const [nameArticle, setNameArticle] = useState("");
  const [nameAuthor, setNameAuthor] = useState("");
  const [content, setContent] = useState("");
  const [plainContent, setPlainContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [addCategoryElement, setAddCategoryElement] = useState([]);
  const [image, setImage] = useState(null);
  const [uploadProcess, setUploadProcess] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const addArticle = async () => {
    console.log("elave");
    console.log("Image object:", image);
    // if (!image || !nameArticle || !content) return;
    // setUploadProcess(true);
    // const imageRef = ref(storage, `articles/${encodeURIComponent(image.name)}`);
    try {
      // await uploadBytes(imageRef, image);
      // const url = await getDownloadURL(imageRef);
      // console.log("Download URL:", url);
      const addNewArticle = await addDoc(collection(db, "articles"), {
        name: nameArticle,
        author: nameAuthor,
        content: plainContent,
        category: selectedCategory,
        date: serverTimestamp(),
        // imageUrl: url,
      });
      await extractKeywordsFromFirstSentence(addNewArticle.id);

      // setNameArticle("");
      // setNameAuthor("");
      // setImage(null);
      // setContent("");
      // setSelectedCategory("");
      navigate("/articles");
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchCategory = async () => {
    try {
      const categoryAdding = await getDocs(collection(db, "categories"));
      const filteredCategories = categoryAdding.docs.map((category) => ({
        id: category.id,
        ...category.data(),
      }));
      setAddCategoryElement(filteredCategories);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  useEffect(() => {
    fetchCategory();

    const fetchArticle = async () => {
      if (id) {
        try {
          const docRef = doc(db, "articles", id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setNameArticle(data.name || "");
            setNameAuthor(data.author || "");
            setContent(data.content || "");
            const cleaned = data.content?.replace(/<[^>]+>/g, "") || "";
            setPlainContent(cleaned);
            setSelectedCategory(data.category || "");
          }
        } catch (error) {
          console.log("Error fetching article:", error.message);
        }
      }
    };

    fetchArticle();
  }, [id]);
  const updatedArticle = async (id) => {
    const updatedDocRef = doc(db, "articles", id);
    const contentRef = await getDoc(updatedDocRef);
    const contentText = contentRef.data()?.content || "";
    const updateNewArticle = await updateDoc(updatedDocRef, {
      name: nameArticle,
      author: nameAuthor,
      content: plainContent,
      category: selectedCategory,
    });
    if (contentText !== plainContent) {
      await extractKeywordsFromFirstSentence(id);
    }

    navigate("/articles");
  };
  return (
    <div className="container">
      <div className="add-article-container">
        <form
          action=""
          className="new-article-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="new-article-input-detail">
            <label htmlFor="" className="label-item">
              Mətnin adı
            </label>
            <input
              type="text"
              value={nameArticle}
              onChange={(e) => setNameArticle(e.target.value)}
            />
          </div>
          <div className="new-article-input-detail">
            <label htmlFor="" className="label-item">
              Müəllif
            </label>
            <input
              type="text"
              value={nameAuthor}
              onChange={(e) => setNameAuthor(e.target.value)}
            />
          </div>
          {/* <div className="new-article-input-detail">
            <label className="label-item">Şəkil</label>
            <input
              type="file"
              name="image"
              className="text-input"
              id="img-input"
              onChange={handleImageChange}
            />
          </div> */}
          <div className="new-article-input-detail">
            <label className="label-item">Mətnin məzmunu</label>
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
                const cleaned = data.replace(/<[^>]+>/g, "");
                setPlainContent(cleaned);
              }}
            />
          </div>
          <div className="new-article-input-detail">
            <label htmlFor="" className="label-item" id="select-category">
              Kateqoriya
            </label>
            <select
              className="select-add-category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Kateqoriya seç</option>
              {addCategoryElement.map((category) => (
                <option value={category.category}>{category.category}</option>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="new-article-btn"
            onClick={addArticle}
          >
            Yeni məqalə əlavə et
          </button>
          <button
            className="new-article-btn"
            type="button"
            onClick={() => updatedArticle(id)}
          >
            Yadda saxla
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
