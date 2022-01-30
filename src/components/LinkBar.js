import { Button } from "./ui";

export function LinkBar() {
  return (
    <div className="linkbar">
      <div className="link-text">https://de.dehidden.com/qwerty</div>
      <Button icon="copy" text="Copy" isPrimary />
    </div>
  );
}
