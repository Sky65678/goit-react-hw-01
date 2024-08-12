import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((item) => (
        <li className={css.listItem} key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
