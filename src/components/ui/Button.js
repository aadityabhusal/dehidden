import style from "../../modules/button.module.css";

export function Button({ text, icon, isPrimary, handler = () => {} }) {
  return (
    <button className={isPrimary && style.primary} onClick={(e) => handler(e)}>
      <img
        className={style.icon}
        src={`/icons/${icon}.svg`}
        alt={`${icon}icon`}
      />
      {text}
    </button>
  );
}
