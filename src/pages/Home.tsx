import NavBar from "../components/NavBar";
import "../styles/componets/home.css";

type Props = {};

function Home({}: Props) {
  return (
    <div className="container-home">
      <NavBar />
    </div>
  );
}

export default Home;
