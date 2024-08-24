import NavBar from "../components/NavBar";
import "../styles/componets/home.css";

type Props = {};

function Home({}: Props) {
  return (
    <div className="container-home">
      <NavBar />
      <div className="main">
        <section className="section">
          <h3 className="subtitle">SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className="title">SPACE</h1>
          <p className="paragraph">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <div className="button-container">
          <button className="button">Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
