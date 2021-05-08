import "./Header.css";
import logo from "../logo.PNG";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <span className="headertitle">Dhruv Notes</span>
      </div>
      <hr/>
    </>
  );
};

export default Header;
