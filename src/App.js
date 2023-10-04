import Header from "./components/layout/Header";
import Slider from "./components/layout/Slider";
import Card from "./components/UI/Card";
import Reservation from "./components/reservation/Reservation";
import Footer from "./components/layout/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Card>
        <Reservation />
      </Card>
    </div>
  );
}

// diamonddetailsmcr.co.uk
