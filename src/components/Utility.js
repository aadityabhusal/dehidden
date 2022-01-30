import style from "../modules/mainPanel.module.css";

export function Utility({ data }) {
  return (
    <a className={style.utility} href={data.url}>
      <div className={style.icon}>
        <img src={`/images/${data.image}`} alt={data.title} />
      </div>
      <div>
        <div className={style.heading}>{data.title}</div>
        <div className={style.subHeading}>{data.description}</div>
      </div>
    </a>
  );
}
