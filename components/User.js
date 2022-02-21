import { useState } from 'react';
import styles from "../styles/user.module.scss";
import { AiFillCaretDown } from 'react-icons/ai';
import Auth from '../services/auth.service';

export default function User(props) {
  const { user } = props;
  const [isOpenUser, setOpenUser] = useState(false);
  const clickUser = () => { setOpenUser(!isOpenUser); };
  const logout = () => {
    Auth.logout();
  }
  return (
    <div className={styles.user}>
      <div className={`${styles.userWrapper} ${isOpenUser ? styles.active : ''}`}>
        <div
          className={styles.name}
          onClick={clickUser}
          style={{ padding: '.3rem 1rem' }}
        >
          <span> {user.name} </span>
          <div className={styles.icon}>
            {' '}
            <AiFillCaretDown />
          </div>
        </div>
        <div className={`${styles.dropdown} ${isOpenUser ? styles.dropdownActive : ''}`}>
          <ul>
            <li onClick={logout}>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  )
}