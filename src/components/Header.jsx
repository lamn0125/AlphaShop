import styles from "./styles/Header.module.css";
import Logo from "../image/Logo.svg";
import Cart from "../image/Iconcart.svg";
import Dark from "../image/Icondark.svg";
import Search from "../image/Iconsearch.svg";

function NavItem({ item }) {
  return (
    <li className={styles.navItem}>
      <a className={styles.navLink} href="#">
        {item}
      </a>
    </li>
  );
}

function Icon({ icon }) {
  return (
    <li className={styles.navItem}>
      <img src={icon} alt="" />
    </li>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navBarMenu}>
        <ul className={styles.navBarList}>
          <NavItem item={"男款"} />
          <NavItem item={"女款"} />
          <NavItem item={"最新消息"} />
          <NavItem item={"客製商品"} />
          <NavItem item={"聯絡我們"} />
        </ul>
        <a className={styles.brandLogo} href="#">
          <img src={Logo} alt="" />
        </a>

        <ul className={styles.navIcons}>
          <Icon icon={Search} />
          <Icon icon={Cart} />
          <Icon icon={Dark} />
        </ul>
      </nav>
    </header>
  );
}
