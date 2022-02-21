import Link from "next/link";
import { useRouter } from "next/router";
import {AiFillDashboard} from "react-icons/ai";
import {FcBusiness, FcAdvertising} from "react-icons/fc";
import styles from '../styles/navbar.module.scss';

export default function Navbar() {
  const router = useRouter();
  const routes = {
    HOME: "/",
    ADS: "/listAds",
    BM: "/listBusiness",
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="logo" />
          </a>
        </Link>
      </div>
      <div className={styles.navbarMenu}>
        <Link href="/">
            <a className={router.pathname === routes['HOME'] ? styles.active : ''}><span><AiFillDashboard/></span>Dashboard</a>
        </Link>
        <Link href="/listBusiness">
            <a className={router.pathname === routes['BM'] ? styles.active : ''}><span><FcBusiness/></span>List business</a>
        </Link>
        <Link href="/listAds">
            <a className={router.pathname === routes['ADS'] ? styles.active : ''}><span><FcAdvertising/></span>List Ads</a>
        </Link>
      </div>
    </nav>
  );
}