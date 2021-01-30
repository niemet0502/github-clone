import Navbar from "./components/navbar/Navbar"
import './App.css';
import ModeToggle from "./components/ModeToogle/ModeToggle"
import "react-toggle/style.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ModeToggle />
    </div>
  );
}

export default App;
