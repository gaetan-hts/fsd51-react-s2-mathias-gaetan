import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../../component/NavBar";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const posts = useSelector((state) => state.posts.posts); // Assurez-vous d'importer le state approprié depuis votre store Redux

  // Logique pour charger les détails du post avec l'ID postId
  useEffect(() => {
    const selectedPost = posts.find((post) => post.id === parseInt(postId));
    if (selectedPost) {
      setPost(selectedPost);
    } else {
      // Gérer le cas où le post n'est pas trouvé
      console.log(`Post with ID ${postId} not found.`);
    }
  }, [postId, posts]);

  return (
    <div>
      <NavBar />
      <h1>Détails du Post</h1>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Auteur: {post.author}</p>
        </div>
      ) : (
        <div>Chargement...</div>
      )}
    </div>
  );
};

export default PostDetail;
