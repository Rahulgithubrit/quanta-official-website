import styles from "./Resources.module.css";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

const Resources = () => {
  return (
    <div className={styles.container}>
      <Hero
        bgImg={"/assets/resources-hero-img.png"}
        bgPos={"80% -25%"}
        bgSize={"550px"}
        heading={"Explore the Resources..."}
      />
      <div className={styles.team_container}>
        <h1>
          <span className={styles.yellow}>R</span>esources
        </h1>
        <span>To be Loaded Soon....</span>
        {/* <p>
          Learn <span>PYTHON</span> using the following link
        </p> */}
        <Contact />
      </div>
    </div>
  );
};

export default Resources;
