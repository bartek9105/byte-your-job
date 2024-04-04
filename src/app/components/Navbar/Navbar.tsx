import { Logo } from "../Logo/Logo";
import MenuIcon from "../../icons/menu.svg";
import styles from "./Navbar.module.scss";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Logo />
      <Image src={MenuIcon} alt="menu" />
    </nav>
  );
};
