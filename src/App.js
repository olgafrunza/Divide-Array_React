import "./App.css";
import Divider from "./components/Divider";

function App() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  return <Divider arr={array} />;
}

export default App;
