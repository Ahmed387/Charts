import "./App.css";
import BarChart from "./components/Bar/Barchart";
import LineChart from "./components/Line/Linechart";
import PieChart from "./components/pie/Piechart";

function App() {
  return (
    <div className="container mx-auto px-4">
      <div className="gap-4">
        <BarChart />
        <LineChart />
        <PieChart />
      </div>
    </div>
  );
}

export default App;
