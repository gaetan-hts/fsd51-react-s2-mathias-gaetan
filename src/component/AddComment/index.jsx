/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../store/slice/postSlice";

const AddComment = ({ postId }) => {
  const [commentContent, setCommentContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentContent.trim() === "") return;
    dispatch(addComment({ postId, content: commentContent }));
    setCommentContent("");
  };

  const handleChange = (e) => {
    setCommentContent(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentContent}
        onChange={handleChange}
        placeholder="Ajouter un commentaire..."
        rows="4"
        cols="50"
      />
      <br />
      <button type="submit">Ajouter un commentaire</button>
    </form>
  );
};

export default AddComment;
