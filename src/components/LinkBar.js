import { Button } from "./ui";
import style from "../modules/header.module.css";
import { useEffect, useState } from "react";
const url = "https://run.mocky.io/v3/8321cc85-81e6-45c6-bd23-33e85c504c7d";

export function LinkBar() {
  const [linkText, setLinkText] = useState("Loading...");
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    async function fetchText() {
      try {
        let response = await (await fetch(url)).text();
        let result = JSON.parse(response.replace(/“|”/gi, '"'));
        setLinkText(result.url);
      } catch (error) {
        setLinkText("URL not found");
      }
    }
    fetchText();
  }, []);

  function handleCopy(e) {
    navigator.clipboard.writeText(linkText);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 1000);
  }

  return (
    <div className={style.linkbar}>
      <div className={style.linktext}>{linkText}</div>
      <Button icon="copy" text="Copy" isPrimary handler={handleCopy} />
      {showCopied && <div className={style.copied}>Copied to Clipboard</div>}
    </div>
  );
}
