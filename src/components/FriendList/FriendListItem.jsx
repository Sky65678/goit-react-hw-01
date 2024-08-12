import clsx from "clsx";
import css from "./FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const containerClsx = clsx(
    css.container,
    { [css.online]: isOnline, [css.offline]: !isOnline } // Додаємо класи в залежності від isOnline
  );

  return (
    <div className={containerClsx}>
      <img src={avatar} alt={name} width="48" />
      <p className={css.text}>{name}</p>
      <p className={css.isOnline}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
