import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector, userStore, loadingStore } from "../hooks";
import Navbar from "./Navbar";
import User from "./User";
import styles from "../styles/layout.module.scss";
import Login from '../components/Login';
import Policy from "../pages/policy";
import { useRouter } from "next/router";
import Loading from "./Loading";
import {setLoadingAction} from "../redux/actions/loadingAction";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  const router = useRouter();
  const userData = useAppSelector(userStore);
  const loading = useAppSelector(loadingStore);
  const dispatch = useAppDispatch();
  const [user, setUser] = useState(false);

  useEffect(() => { 
    if (userData.accessToken) {
      setUser(userData);
      console.log(userData);
    }
  }, [userData]);

  useEffect(() => {
    const userLocal = localStorage.getItem('user');
    if (userLocal) {
      setUser(JSON.parse(userLocal));
    }
    setTimeout(() => {
      dispatch(setLoadingAction(false));
    }, 3000);
  }, []);

  return (
    <>
    {loading.isLoading ? <Loading/> : 
      user ? (
        <div className={styles.layoutContainer}>
          {user.accessToken && <Navbar />}
          {user.accessToken && <User user={user}/>}
          <main>{children}</main>
        </div> )
      : router.pathname === '/policy' ? <Policy/> : ( <Login /> )}
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}