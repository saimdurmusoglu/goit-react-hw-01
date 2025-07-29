import React from 'react';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendCard}>
      <img className={styles.friendAvatar} src={avatar} alt={name} />
      <p className={styles.friendName}>{name}</p>
      <p
        className={`${styles.friendStatus} ${
          isOnline ? styles.online : styles.offline
        }`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

export default FriendListItem;
