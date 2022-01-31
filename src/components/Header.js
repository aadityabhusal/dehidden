import { LinkBar } from ".";
import { Logo } from "./ui";
import style from "../modules/header.module.css";
export function Header() {
  return (
    <header className={style.header}>
      <Logo />
      <LinkBar />
    </header>
  );
}
