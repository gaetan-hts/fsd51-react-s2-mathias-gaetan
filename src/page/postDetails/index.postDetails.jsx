/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPosts } from "../../store/selector";
import AddComment from "../../component/AddComment";
import axios from "axios";

const PostDetail = () => {
  const { postID } = useParams();
  const [post, setPost] = useState(null);
  const posts = useSelector(selectPosts);
  const [oldComments, setOldComments] = useState([]);

  useEffect(() => {
    const selectedPost = posts.find((post) => post.id === parseInt(postID));
    if (selectedPost) {
      setPost(selectedPost);
    } else {
      console.log(`Post with ID ${postID} not found.`);
    }
  }, [postID, posts]);

  useEffect(() => {
    if (post) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then((response) => {
          setOldComments(response.data);
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
        });
    }
  }, [post]);

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
            <ul>
              {post.comments && (
                <>
                  {post.comments.map((item) => (
                    <li key={item.id} className="comment">
                      <p>
                        <strong>Date :</strong> {formatTimestamp(item.id)}
                      </p>
                      <p>
                        <strong>Auteur Id :</strong>
                        {item.authorId}
                      </p>
                      <p>
                        <strong>Contenu :</strong>
                        {item.content}
                      </p>
                    </li>
                  ))}
                </>
              )}
              {oldComments && (
                <>
                  {oldComments.map((item) => (
                    <li key={item.is} className="comment">
                      <p>
                        <strong>Date :</strong> {"Date inconnue"}
                      </p>
                      <p>
                        <strong>Auteur Id :</strong>
                        {item.email}
                      </p>
                      <p>
                        <strong>Contenu :</strong>
                        {item.body}
                      </p>
                    </li>
                  ))}
                </>
              )}
            </ul>
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
