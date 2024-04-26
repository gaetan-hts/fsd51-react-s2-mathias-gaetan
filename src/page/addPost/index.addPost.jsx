import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/slice/postSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérifiez si les champs sont vides
    if (!title || !body) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    dispatch(addPost({ title, body, userId: "1" }));

    navigate("/");
  };
  return (
    <div>
      <h2>Ajouter un post :</h2>
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
          <label htmlFor="body">Contenu:</label>
          <textarea id="body" value={body} onChange={handleBodyChange} />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};
export default AddPost;
