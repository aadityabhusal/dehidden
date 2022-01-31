import { Button } from "./ui";
import style from "../modules/nftDisplay.module.css";

export function NFTDisplay() {
  return (
    <div className={style.nftDisplay}>
      <div className={style.nftContainer}>
        <div className={style.nft}></div>
        <div className={style.projectName}>Shards of ETH</div>
        <div className={style.nftName}>To the Moon</div>
        <div className={style.nftNumber}>#001</div>
        <Button icon="info" text="About" isPrimary />
      </div>
    </div>
  );
}
