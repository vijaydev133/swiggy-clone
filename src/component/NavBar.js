import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const NavBar = () => {
  const user = useContext(UserContext);
  return (
    <>
      <ul className="flex my-10">
        <li className="mx-3">
          <Link to={"/"}>Home</Link>{" "}
        </li>
        <li className="mx-3">
          <Link to={"/contact"}>Contact</Link>{" "}
        </li>
        <li className="mx-3">
          <Link to={"/about"}>About</Link>{" "}
        </li>
        <li className="mx-3">
          <Link to={"/cart"}>Cart</Link>{" "}
        </li>
        <li className="mx-3">
          <Link to={"/instamart"}>Instamart</Link>{" "}
        </li>
      </ul>
      <h1>User : {user.fName}</h1>
    </>
  );
};

export default NavBar;
