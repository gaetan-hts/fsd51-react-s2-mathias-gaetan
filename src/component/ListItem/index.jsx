/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// path: toolkit/src/component/ListItem/index.jsx
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  console.log(item);
  return (
    <div className={"postItem"}>
      <div className={"up"}>
        <Link to={`/post/${item.id}`}>{item.title}</Link>
        <p>Auteur numéro : {item.userId}</p>
        <p>Contenu de l'article : {item.body}</p>
      </div>
    </div>
  );
};

export default ListItem;
