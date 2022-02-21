import React from 'react';
import { useAppSelector, loadingStore } from "../hooks";
import style from '../styles/loading.module.scss';
function Loading() {
  const loading = useAppSelector(loadingStore);
  return (
    <div className={`${style.loading} ${style.active}`}>
      <div>
        <div className={style.loader}></div>
      </div>
    </div>
  );
}

export default Loading;
