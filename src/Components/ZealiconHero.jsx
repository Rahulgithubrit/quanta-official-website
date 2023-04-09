import styles from "../styles/zealicon.module.css";
export default function ZeliconHero(){
    return(<div className={styles.hero}>
        <div className={styles.left}>
          <h1>Zealicon</h1>
          <div className= {styles.year}>2023</div>
          <p className= {styles.first}>At Quanta, we bring you three epic events at Zealicon: Robo Olympics, Mighty Maneuver, Tomorrow Tesla and Electrohunt.</p>
          <p className={styles.second}>Get ready for some dhamaal and masti as we present to you these blockbuster events.</p>
        </div>
        <div className={styles.vid}>
        <iframe src="https://www.youtube.com/embed/fVW8-px4Ufw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>)

}









