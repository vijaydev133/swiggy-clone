import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="flex justify-between px-10 mb-10 shadow-lg">
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
