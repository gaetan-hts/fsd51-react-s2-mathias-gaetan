/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPosts } from "../../store/selector";
import AddComment from "../../component/AddComment";

const PostDetail = () => {
  const { postID } = useParams();
  const [post, setPost] = useState(null);
  const posts = useSelector(selectPosts);

  console.log(post);

  useEffect(() => {
    const selectedPost = posts.find((post) => post.id === parseInt(postID));
    if (selectedPost) {
      setPost(selectedPost);
    } else {
      console.log(`Post with ID ${postID} not found.`);
    }
  }, [postID, posts]);

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
  }

  return (
    <div>
      <h1>Détails du Post</h1>
      {post ? (
        <div>
          <h2>Titre du post :{post.title}</h2>
          <p>ID du post : {post.id}</p>
          <p>Contenu du post :{post.body}</p>
          <p>ID de l'auteur: {post.userId}</p>
          <p>
            Liste des commentaires :{" "}
            {post.comments ? (
              <ul>
                {post.comments.map((item) => (
                  <li key={item.id}>
                    Date : {formatTimestamp(item.id)} / contenu : {item.content}{" "}
                    / auteur Id :{post.userId}
                  </li>
                ))}
              </ul>
            ) : (
              "Aucun commentaire pour le moment"
            )}
          </p>
          <AddComment postId={post.id} />
        </div>
      ) : (
        <div>Chargement...</div>
      )}
    </div>
  );
};

export default PostDetail;
