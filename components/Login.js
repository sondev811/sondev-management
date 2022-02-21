import styles from '../styles/login.module.scss';
import FacebookLogin from 'react-facebook-login';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { setUserAction } from '../redux/actions/userActions';
import Auth from '../services/auth.service';
import { useRouter } from 'next/router';

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    const user = Auth.getLocalStorage('user');
    if (user) {
      return;
    }
  } , []);
  const responseFacebook = (res) => {
    if (!res.accessToken) {
      return;
    }
    dispatch(setUserAction(res));
    Auth.setLocalStorage('user', JSON.stringify(res));
    router.push('/');
  };
  const componentClicked = (data) => {
    console.log(data);
  }
  return (
    <div className={styles.login}>
      <div className={styles.logo}>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
      </div>
      <div className={styles.loginWrapper}>
        <div>
          <div className={styles.name}>Sondev</div>
          <div className={styles.title}>Sondev will provide users to Manage his business and Ads, also could see Ads Insights</div>
          <FacebookLogin
            appId="623619475598221"
            autoLoad={false}
            fields="name,email,picture"
            onClick={(res) => componentClicked(res)}
            callback={(res) => responseFacebook(res)}
          />
          <Link href="/policy">
            <button className={styles.privacyPolicy}>Privacy Policy</button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}
