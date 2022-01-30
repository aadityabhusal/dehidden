import style from "../modules/mainPanel.module.css";
import { Utility } from "./Utility";
import { utilities } from "../data/data";
export function MainPanel() {
  return (
    <div className={style.mainPanel}>
      {utilities.map((item) => (
        <Utility key={item.id} data={item} />
      ))}
    </div>
  );
}
