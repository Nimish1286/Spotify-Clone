import "./App.css";

import { Leftmenu } from "./components/Leftmenu";
import { Maincontainer } from "./components/Maincontainer";

function App() {
  return (
    <div className="App">
      
      <Leftmenu />  
      <Maincontainer />
      
      <div className="background"></div>

      
    </div>
  );
}

export default App;
