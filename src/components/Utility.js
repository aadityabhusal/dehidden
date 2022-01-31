import style from "../modules/mainPanel.module.css";

export function Utility({ data }) {
  return (
    <a href={data.url}>
      <div className={style.utility}>
        <div className={style.utilityIcon}>
          <img src={`/images/${data.image}`} alt={data.title} />
        </div>
        <div className={style.utilityText}>
          <div className={style.heading}>{data.title}</div>
          <div className={style.subHeading}>{data.description}</div>
        </div>
      </div>
    </a>
  );
}
