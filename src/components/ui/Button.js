export function Button({ text, icon, isPrimary }) {
  return (
    <button className={`button ${isPrimary && "primary"}`}>
      <img className="icon" src={`/${icon}.svg`} alt={`${icon}icon`} />
      {text}
    </button>
  );
}
