import style from "../../modules/button.module.css";

export function Button({
  text,
  icon,
  isPrimary,
  hideText,
  handler = () => {},
}) {
  return (
    <button
      className={isPrimary && style.primary}
      onClick={(e) => handler(e)}
      data-hidetext={hideText && "true"}
    >
      <img
        className={style.icon}
        src={`/icons/${icon}.svg`}
        alt={`${icon}icon`}
      />
      <span>{text}</span>
    </button>
  );
}
