import css from "./Profile.module.css";

export default function Profile({
  profile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.avatar} src={avatar} alt={username} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.key}>Followers</span>
          <span className={css.value}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.key}>Views</span>
          <span className={css.value}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.key}>Likes</span>
          <span className={css.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

// export default function Profile() {
//   return (
//     <div>
//       <div>
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//           alt="User avatar"
//         />
//         <p>Petra Marica</p>
//         <p>@pmarica</p>
//         <p>Salvador, Brasil</p>
//       </div>
//       <ul>
//         <li>
//           <span>Followers</span>
//           <span>1000</span>
//         </li>
//         <li>
//           <span>Views</span>
//           <span>2000</span>
//         </li>
//         <li>
//           <span>Likes</span>
//           <span>3000</span>
//         </li>
//       </ul>
//     </div>
//   );
// }
