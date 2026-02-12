import React from "react";
import "./Comment.css";
const Comment = () => {
  return (
    <div className="comment-container">
      <h2>Rəyiniz bizim üçün dəyərlidir. Təklif və şərhlərinizi paylaşın</h2>
      <p>Yenilikləri birbaşa gələnlər qutunuza alın</p>
      <div className="comment-user">
        <textarea className="comment-textarea">
          Rəy və təkliflərinizi yazın
        </textarea>
        <button className="comment-user-btn">Göndər</button>
      </div>
    </div>
  );
};

export default Comment;
