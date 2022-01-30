import { Button } from "./ui";
import style from "../modules/header.module.css";

export function LinkBar() {
  return (
    <div className={style.linkbar}>
      <div className={style.linktext}>https://de.dehidden.com/qwerty</div>
      <Button icon="copy" text="Copy" isPrimary />
    </div>
  );
}
