import "./App.css";
import Rank from "./components/Rank";

function App() {
  return (
    <div>
      <nav className="navbar bg-danger">
        <div className="container">
          <span className="navbar-brand mb-0 h1 text-light">RANK.ID</span>
        </div>
      </nav>
      <div className="container">
        <Rank />
      </div>
    </div>
  );
}

export default App;
