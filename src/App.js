import Navbar from "./components/navbar/Navbar"
import './App.css';
import Body from "./components/body/Body"
import "react-toggle/style.css";
import Tab from "./components/TabComponent/Tab"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Tab />
      <Body />
    </div>
  );
}

export default App;
