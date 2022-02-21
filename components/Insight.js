import styles from "../styles/adsAcc.module.scss";

export default function Insight(props) {
  const { data } = props;
  return (
    <div className={styles.adsAcc}>
      { data && data.length ? (
        data.map((item, index) => (
          <div className={styles.adsAccWrap} key={item.campaign_id}>
            <div>
              <span>Account Id: </span>
              <p>{item.account_id}</p>
            </div>
            <div>
              <span>Campaign Id: </span>
              <p>{item.campaign_id}</p>
            </div>
            <div>
              <span>Spend: </span>
              <p>{item.spend}</p>
            </div>
            <div>
              <span>CPM: </span>
              <p>{item.cpm}</p>
            </div>
            <div>
              <span>CPC: </span>
              <p>{item.cpc}</p>
            </div>
            <div>
              <span>Date Start: </span>
              <p>{item.date_start}</p>
            </div>
            <div>
              <span>Date Stop: </span>
              <p>{item.date_stop}</p>
            </div>
          </div> )

        ))
        : <p>No data</p>}
    </div>
  )
}