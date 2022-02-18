import styles from '../styles/login.module.css';
import FacebookLogin from 'react-facebook-login';
import Link from 'next/link'
export default function Login() {
  const responseFacebook = (res) => {
    console.log(res);
  }
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
            appId="673567520496317"
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
