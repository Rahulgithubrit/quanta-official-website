import About from "../components/About";
import Contact from "../components/Contact";
import Department from "../components/Department";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import { team_src, events_src } from "../components/slider_src";

const Landing = () => {
  return (
    <div style={{overflowX : "hidden"}}>
      <Hero 
        bgImg={"/assets/homepage-hero-img.png"}
        heading={"Guide to Technology..."}
        subHeading={"We LEARN, EXPLORE and GROW Together"}
        bgPos={"95% -200%"}
        bgSize = {"1000px"}
      />
      <About />
      <Slider src={team_src} sliderTitle={"Team Leads"} />
      <Department />
      <Slider src={events_src} sliderTitle={"Events"} />
      <Contact />
    </div>
  );
};

export default Landing;
