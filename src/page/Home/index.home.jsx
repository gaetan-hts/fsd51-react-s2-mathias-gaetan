import { useSelector } from "react-redux";
import { selectLoadingState, selectPosts } from "../../store/selector";
import ListItem from "../../component/ListItem";

const Home = () => {
  const posts = useSelector(selectPosts);
  const loadingState = useSelector(selectLoadingState);

  return (
    <div>
      {loadingState === "loading" ? (
        <div>loading...</div>
      ) : loadingState === "error" ? (
        <div>Error, please try again</div>
      ) : posts.length > 0 ? (
        [...posts]
          .reverse()
          .map((post) => <ListItem key={post.id} item={post} />)
      ) : (
        <span>
          Nothing to display,
          <br /> you can look for a rest or add a new post to complete.
        </span>
      )}
    </div>
  );
};

export default Home;
