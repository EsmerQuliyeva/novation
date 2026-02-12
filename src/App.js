// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Articles from "./Pages/Articles";
import CategoriesMain from "./Pages/CategoriesMain";
import UsersPage from "./Pages/UsersPage";
import Login from "./Components/LogIn/Login";
import SignUp from "./Components/SignUp/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddArticle from "./Components/AddArticle/AddArticle";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Bütün bu route-lar Layout (Navbar) içində olacaq */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/categories" element={<CategoriesMain />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/add-article" element={<AddArticle />} />
          <Route path="/add-article/:id" element={<AddArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
