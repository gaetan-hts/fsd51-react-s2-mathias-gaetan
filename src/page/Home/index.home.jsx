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
        posts.map((task) => <ListItem key={task.id} item={task} />)
      ) : (
        <span>
          Nothing to display,
          <br /> you can look for a rest or add a new task to complete.
        </span>
      )}
    </div>
  );
};

export default Home;
