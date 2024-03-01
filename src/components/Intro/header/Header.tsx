import "./Header.css";
import Logo from "./logo/Logo";
import Navbar from "./navlinks/Navbar";

const Header = () => {
  return (
    <header className="header-wrapper">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
