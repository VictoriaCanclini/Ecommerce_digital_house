import Logo from "../../../assets/logo.svg";
import Cart from "../../../assets/cart.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarDetail}>
        <img src={Logo} alt="" />
        <div>
          <span>DH Ecommerce</span>
        </div>
      </div>
      <div>
        <p>2</p>
        <img src={Cart} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
