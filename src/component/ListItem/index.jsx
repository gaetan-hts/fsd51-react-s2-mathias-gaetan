// path: toolkit/src/component/ListItem/index.jsx
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  return (
    <div className={"taskItem"}>
      <div className={"up"}>
        <Link to={`/post/${item.id}`}>{item.title}</Link>
      </div>
    </div>
  );
};

export default ListItem;
