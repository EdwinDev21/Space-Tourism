import NavBar from "./NavBar";
import "../styles/pages/contentDisplay.css";
import moon from "../assets/destination/image-moon.png";

type Props = {};

function ContentDisplay({}: Props) {
  return (
    <div className="content-display-container">
      <NavBar />
      <div>
        <h3 className="pick-title">01 Pick your destination</h3>
      </div>
      <section className="content-container">
        <div>
          <img className="img-moon" src={moon} alt="moon" />
        </div>
        <div className="text">
          <h1 className="moon-title">MOON</h1>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <hr></hr>
          <div className="distance">
            <div>
              <h3>AVG. DISTANCE</h3>
              <h2>384,400 km</h2>
            </div>
            <div>
              <h3>Est. travel time</h3>
              <h2>3 days</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContentDisplay;
