import Poll from "../components/Poll";
import styles from "../styles/zealicon.module.css";
export default function Zealicon() {
  return(
    <div className= {styles.main}>
      <div className={styles.hero}>
        <div className={styles.left}>
          <h1>Zealicon</h1>
          <div>2023</div>
        </div>
        <div className={styles.vid}>
        <iframe width="560" height="382" src="https://www.youtube.com/embed/fVW8-px4Ufw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    <Poll/>
    </div>)
};
