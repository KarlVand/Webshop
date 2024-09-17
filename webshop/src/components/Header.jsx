import "../styles/css/header.css";
import Logo from "../assets/images/apple-touch-icon.png";
import BurgerMenu from "../assets/burger-menu.svg";

function Header() {
  return (
    <header>
      <div className="logo">
        <img
          src={Logo}
          alt="logo"
        />
        <h1>FreshShop</h1>
      </div>

      <ul className="links">
        <li>
          <a href="HOME">Home</a>
        </li>
        <li>
          <a href="ABOUT US">About us</a>
        </li>
        <li>
          <a href="SHOP">Shop</a>
        </li>
        <li>
          <a href="GALLERY">Gallery</a>
        </li>
        <li>
          <a href="CONTACT US">Contact us</a>
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
    </header>
  );
}

export default Header;
