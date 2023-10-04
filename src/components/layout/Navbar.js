import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul>
      <li>
        <a href="#" className={styles.active}>
          home
        </a>
      </li>
      <li>
        <a href="#">about</a>
      </li>
      <li>
        <a href="#">services</a>
      </li>
      <li>
        <a href="#">contact</a>
      </li>
    </ul>
  );
};

export default Navbar;
