import React, { useEffect, useState } from "react";
import "./Categories.css";
import { db } from "../../config/firebase";
import {
  getDocs,
  addDoc,
  collection,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
const Categories = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState("");
  // const addCategory = async () => {
  // //   console.log("elave olunur");
  // //   try {
  // //     const querySnapShot = await addDoc(collection(db, "categories"), {
  // //       category,
  // //     });
  // //     setCategory("");
  // //     readCategories();
  // //   } catch (error) {
  // //     console.log(error.message);
  // //   }
  // // };
  const readCategories = async () => {
    try {
      const categoryElements = await getDocs(collection(db, "categories"));
      const categoriesList = categoryElements.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categoriesList);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchAndSetcategory = async (id) => {
    try {
      const categoryRef = doc(db, "categories", id);
      const categorySnap = await getDoc(categoryRef);
      const categoryInfo = categorySnap.data().category;
      setCategory(categoryInfo);
      setEditId(id); // düzəliş üçün id-ni yadda saxla
    } catch (error) {
      console.error(error.message);
    }
  };
  const updateCategory = async (e) => {
    if (e.key === "Enter" && editId) {
      try {
        const categoryRef = doc(db, "categories", editId);
        await updateDoc(categoryRef, { category });
        console.log("Kateqoriya yeniləndi");
        setEditId(null);
        setCategory("");
        readCategories();
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  const deleteCategory = async (id) => {
    try {
      const categoryRef = doc(db, "categories", id);
      const categorySnap = await getDoc(categoryRef);

      if (categorySnap.exists()) {
        await deleteDoc(categoryRef);
        const filteredCategories = categories.filter(
          (category) => category.id !== id
        );
        setCategories(filteredCategories);
        console.log("Kateqoriya uğurla silindi");
      } else {
        console.warn("Kateqoriya tapılmadı");
      }
    } catch (error) {
      console.error("Kateqoriyanı silmək alınmadı:", error);
    }
  };
  useEffect(() => {
    readCategories();
  }, []);
  return (
    <div className="category-container">
      <h1>Kateqoriyalar</h1>
      <div className="category-input-container">
        <input
          type="text"
          className="category-input"
          placeholder="Yeni kateqoriya adı..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          onKeyDown={updateCategory}
        />
        <button className="category-input-btn">
        {/* <button className="category-input-btn" onClick={addCategory}> */}
          Əlavə et
        </button>
      </div>
      <table className="category-table-container">
        <thead>
          <tr>
            <th>Kateqoriyalar</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((categoryElement) => (
            <tr key={categoryElement.id}>
              <td>{categoryElement.category}</td>
              <td className="category-actions">
                <button
                  className="edit-btn"
                  onClick={() => fetchAndSetcategory(categoryElement.id)}
                >
                  Düzəliş
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteCategory(categoryElement.id)}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;

