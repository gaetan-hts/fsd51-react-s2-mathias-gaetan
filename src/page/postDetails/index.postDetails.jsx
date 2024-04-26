import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPosts } from "../../store/selector";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const posts = useSelector(selectPosts);

  console.log(posts);
  console.log(postId);

  useEffect(() => {
    const selectedPost = posts.find((post) => post.id === parseInt(postId));
    if (selectedPost) {
      setPost(selectedPost);
    } else {
      console.log(`Post with ID ${postId} not found.`);
    }
  }, [postId, posts]);

  return (
    <div>
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
