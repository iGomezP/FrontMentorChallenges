import SvgImage from "../images/illustration-hero.svg";
import SvgIcon from "../images/icon-music.svg";

const CardSummary = () => {

  return (
    <div className="mainContainer">

      <div className="card">

        <div className="svgCard">
          <img src={ SvgImage } alt="CardImage" />
        </div>

        <div className="container">

          <div>
            <h1>Order Summary</h1>
          </div>

          <div className="description">
            <p>You can now listen to millions of songs, audiobooks, and podcasts on any
              device anywhere you like!</p>
          </div>

          <div className="annual-plan">
            <div className="annual-plan_icon">
              <img src={ SvgIcon } alt="CardIcon" />
            </div>

            <div className="annual-plan_price">
              <h3>Annual Plan</h3>
              <p>$59.99/year</p>
            </div>

            <div className="annual-plan_change">
              <a href="/">Change</a>
            </div>

          </div>


          <button className="btn">Proceed to Payment</button>


          <div className="order">
            <a href="http://" target="_blank" rel="noopener noreferrer">Cancel Order</a>
          </div>
        </div>

      </div>

    </div>
  );
}

export default CardSummary;