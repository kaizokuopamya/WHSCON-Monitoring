import Form from "./components/Form";
import Navbar from "./components/Navbar";
import {useState} from "react"
import "./style.css";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="bg-gray-100 dark:bg-[#0A1929]">
      <Navbar toggleMode={toggleMode} darkMode={darkMode}/>
      <Form/>
      </div>
    </div>
  );
}

export default App;
