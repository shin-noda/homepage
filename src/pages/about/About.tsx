import "./About.css";
import CoffeeImg from "../../assets/about-images/coffee.jpeg";

const About  = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-image-wrapper">
        <img src={CoffeeImg} alt="Coffee" className="about-coffee-img" />
        <div className="about-text">
          <h2>Hi, welcome to my web page!</h2>
          <p>I'm Shin, and I enjoy coding and making maps. In my spare time, I also love visiting coffee shops in Toronto.</p>
          <p>
            I put a <a
              href="https://www.arcgis.com/apps/mapviewer/index.html?webmap=8680a2ce27ed4290bf0382f5b2794819"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >here</a> link to a simple map of coffee shops I've visited in 2025. I hope to visit more! ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;