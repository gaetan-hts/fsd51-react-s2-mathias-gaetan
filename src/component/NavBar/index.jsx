// path: toolkit/src/component/NavBar/index.jsx
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", alignItems: "center" }}>
      <ul style={{ listStyle: "none" }}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/addPost"}>Add post</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
