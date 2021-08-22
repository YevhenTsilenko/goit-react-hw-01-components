import styles from './friends.module.css';

function FriendListItem({ avatar, name, isOnline, id }) {
    return (
        <li key={id} className={styles.item}>
          {isOnline ? <span className={styles.online}></span> : <span className={styles.offline}></span>}
          <img className={styles.avatar} src={avatar} alt={name} width="48" />
          <p className={styles.name}>{name}</p>
        </li>
    );
}

export default FriendListItem;