export function Button({ text, icon, isPrimary, handler = () => {} }) {
  return (
    <button
      className={`button ${isPrimary && "primary"}`}
      onClick={(e) => handler(e)}
    >
      <img className="icon" src={`/icons/${icon}.svg`} alt={`${icon}icon`} />
      {text}
    </button>
  );
}
