import "../styles/css/header.css";
import Logo from "../assets/images/apple-touch-icon.png";

import BurgerMenu from "../assets/icons/burger-menu.svg";

import Account from "../assets/icons/light-account.svg";
import Location from "../assets/icons/light-location.svg";
import Contact from "../assets/icons/light-contact.svg";

import MyAccount from "../assets/icons/account_box.svg";
import MyCart from "../assets/icons/shopping_cart.svg";

function Header() {
  return (
    <header>
      {/* ----- INFO BANNER ----- */}
      <div className="banner">
        {/* - LANGUAGE SELECT - */}
        <select
          name="language"
          id="chooseLanguage">
          <option value="">Language</option>
          <option value="french">French</option>
          <option value="dutch">Dutch</option>
          <option value="english">English</option>{" "}
        </select>
        {/* - INFO NAV - */}
        <ul>
          <li>
            <img
              src={Account}
              alt="account"></img>{" "}
            <a href="Account">My Account</a>
          </li>
          <li>
            <img
              src={Location}
              alt="location"></img>
            <a href="Location">Our Location</a>
          </li>
          <li>
            <img
              src={Contact}
              alt="contact"></img>
            <a href="Contact">Contact Us</a>
          </li>
        </ul>
        {/* - DYNAMIC DISPLAY - */}
        <div className="promo">
          <p>
            Quelconque promo Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        {/* - SEARCH BAR - */}
        <form>
          <input
            className="search"
            type="search"
            placeholder="Search Website"></input>
          <input
            className="submit"
            type="submit"
            value="Search"></input>
        </form>
      </div>
      {/* ----- MAIN NAVBAR & LOGO ----- */}
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
        {/* - MENU - */}
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
        {/* - ACTION BUTTONS */}
        <div className="buttons">
          <div className="account btn">
            <img
              src={MyAccount}
              alt="account"
            />
            <a href="My Account">My Account</a>
          </div>

          <div className="myCart btn">
            <img
              src={MyCart}
              alt="cart"
            />
            <a href="My Cart">My Cart</a>
          </div>
        </div>
        {/* ----- RESPONSIVE HEADER => MOBILE ----- */}
        <div className="mobileHeader">
          <div className="mobileImg">
            <img
              src={Logo}
              alt="logo"
            />
          </div>
          <div className="mobileLogo">
            <h1>
              <span className="fresh">Fresh</span>
              <span className="shop">Shop</span>
            </h1>
          </div>
          <div className="burgerBtn">
            <img
              src={BurgerMenu}
              alt="Menu"
            />
          </div>
        </div>
        {/* - BURGER MENU - */}
        <div className="burgerMenu">
          <ul className="linksBurger">
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
              <a href="Contact">Contact</a>
            </li>
            <li>
              <a href="Locations">Locations</a>
            </li>
            <div className="divider"></div>
            <li>
              <a href="MyAccount">My Account</a>
            </li>
            <li>
              <a href="MyCart">My Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
