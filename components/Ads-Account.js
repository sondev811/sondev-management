import { accStatus } from "../constants/api.constant";
import authService from "../services/auth.service";
import styles from "../styles/adsAcc.module.scss";

export default function AdsAccount(props) {
  const { data } = props;
  console.log(data);
  const copy = (copyText) => {
    authService.copyToClipboard(copyText);
  }
 
  return (
    <div className={styles.adsAcc}>
      {data && data.map(adsAcc => (
        <div className={styles.adsAccWrap} key={adsAcc.id}>
          <div>
            <span>Id: </span>
            <p style={{cursor: 'pointer'}} onClick={() => copy(adsAcc.id)}>{adsAcc.id}</p>
          </div>
          <div>
            <span>Name: </span>
            <p>{adsAcc.name}</p>
          </div>
          <div>
            <span>Currency: </span>
            <p>{adsAcc.currency}</p>
          </div>
          <div>
            <span>Amount spent: </span>
            <p>{adsAcc.amount_spent}</p>
          </div>
          <div>
            <span>Status: </span>
            <p className={styles.status} style={{background: accStatus[adsAcc.account_status].color}}>{accStatus[adsAcc.account_status].name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}