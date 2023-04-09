
import Poll from "../components/Poll";
import styles from "../styles/zealicon.module.css"; import ZealiconFooter from "../components/ZealiconFooter";
import ZealiconNavbar from "../components/ZealiconNavbar";
import ZeliconHero from "../components/ZealiconHero";
import ZeliconEvents from "../components/ZeliconEvents";
export default function Zealicon() {
  return(
    <div className= {styles.main}>
      <ZealiconNavbar />
      <ZeliconHero/>
      <ZeliconEvents/>
      <Poll />
      <ZealiconFooter />
    </div>)
};
