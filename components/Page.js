import authService from "../services/auth.service";
import styles from "../styles/page.module.scss";

export default function Page(props) {
  const { data } = props;

  const copy = (copyText) => {
    authService.copyToClipboard(copyText);
  }
 
  return (
    <div className={styles.page}>
      {data && data.map(page => (
        <div className={styles.pageWrap} key={page.id}>
          <img src={page.picture.data.url} alt={page.name} />
          <p onClick={() => copy(page.id)}>{page.id}</p>
          <h3 onClick={() => copy(page.name)} >{page.name}</h3>
          <a href={page.link} target="_blank">Page link</a>
        </div>
      ))}
    </div>
  )
}