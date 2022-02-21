import { useEffect, useState } from "react";
import { tokenStore, useAppDispatch, useAppSelector } from "../hooks";
import { setTokenAction } from "../redux/actions/tokenAction";
import styles from '../styles/home.module.scss';

export default function Home() {
  const dispatch = useAppDispatch();
  const tokenValue = useAppSelector(tokenStore);
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(tokenValue.token);
  }, [tokenValue]);

  const onChange = (e) => {
    setToken(e.target.value);
  }
  const onSubmit = () => {
    dispatch(setTokenAction(token));
  }
  return (
    <div className={styles.dashboard}>
      <h2>Welcome</h2>
      {/* <div>
        <p>Access token</p>
        <input value={token} onChange={(e) =>onChange(e)}/>
        <button onClick={() => onSubmit()}>Add</button>
      </div> */}
    </div>
  )
}
