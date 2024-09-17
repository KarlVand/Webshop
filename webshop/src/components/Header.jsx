import "../styles/css/header.css";
import Logo from "../assets/images/apple-touch-icon.png";
import BurgerMenu from "../assets/burger-menu.svg";

function Header() {
  return (
    <header>
      <div className="banner">
        <p></p>
        <ul>
          <li>
            <a href="Account">My Account</a>
          </li>
          <li>
            <a href="Location">Our Location</a>
          </li>
          <li>
            <a href="Contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar">
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
          />
          <h1>
            <span className="fresh">Fresh</span>
            <span className="shop">Shop</span>
          </h1>
        </div>

        <ul className="links">
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="About">About us</a>
          </li>
          <li>
            <a href="Shop">Shop</a>
          </li>
          <li>
            <a href="Gallery">Gallery</a>
          </li>
          <li>
            <a href="Contact">Contact us</a>
          </li>
        </ul>

        <div className="buttons">
          <a href="My Account">My Account</a>
          <a href="My Cart">My Cart</a>
        </div>

        <div className="burger-menu">
          <img
            src={BurgerMenu}
            alt="Menu"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
