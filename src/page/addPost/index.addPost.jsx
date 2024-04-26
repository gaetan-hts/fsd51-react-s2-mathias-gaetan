import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "../../component/NavBar";
import { addPost } from "../../store/slice/postSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérifiez si les champs sont vides
    if (!title || !content || !author) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    dispatch(addPost({ title, content, author }));

    navigate("/");
  };
  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Contenu:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <div>
          <label htmlFor="author">Auteur:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};
export default AddPost;
