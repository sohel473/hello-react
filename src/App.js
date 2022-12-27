import MainComponent from "./components/MainComponent";
import "../App.css";
import { BrowserRouter } from "react-router-dom";

// functional component
function App() {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}

export default App;
