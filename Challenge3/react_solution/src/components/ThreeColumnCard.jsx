import SedanIcon from "../images/icon-sedans.svg";
import SuvsIcon from "../images/icon-suvs.svg";
import LuxuryIcon from "../images/icon-luxury.svg";


const ThreeColumnCard = () => {
  return (
    <div className="main-container">

      <div className="container_sedans">
        <img src={ SedanIcon } alt="SedanIcon" />
        <h1>Sedans</h1>
        <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
          or on your next road trip.</p>
        <div className="container_desktop"></div>
        <input type="button" value="Learn More" />
      </div>

      <div className="container_suvs">
        <img src={ SuvsIcon } alt="SuvIcon" />
        <h1>SUVs</h1>
        <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
          and off-road adventures.</p>
        <div className="container_desktop"></div>
        <input type="button" value="Learn More" />
      </div>

      <div className="container_luxury">
        <img src={ LuxuryIcon } alt="LuxuryIcon" />
        <h1>Luxury</h1>
        <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
          rental and arrive in style.</p>
        <div className="container_desktop"></div>
        <input type="button" value="Learn More" />
      </div>

    </div>
  );
}

export default ThreeColumnCard;