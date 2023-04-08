import { teamThirdYear, teamFourthYear } from "../assets/teamInfo";
import Teamyear from "../components/Teamyear";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Teampage() {
  return (
    <div>
      <Navbar />
      <Hero
        bgImg={"/assets/team-hero-img.png"}
        bgPos={"85% 0%"}
        heading={"Meet the Team..."}
        bgSize={"500px"}
      />
      <Teamyear props={teamFourthYear} year="Fourth" />
      <Teamyear props={teamThirdYear} year="Third" />
      <Contact />
      <Footer />
    </div>
  );
}
