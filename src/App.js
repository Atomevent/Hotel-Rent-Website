import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.js";
import ItemGrid from "./components/ItemGrid.js";
import {Route} from "react-router-dom";
import hotel from "./List/hotel";
import Desc from "./components/Desc.js"
import Payment from "./components/Payment.js"

function App() {
  return (
    <div>
      <Route path="/">
        <div className="App">
          <Header/> 
        </div>
      </Route>
      <Route path="/" exact>
        <div className="App">
          <ItemGrid/>
        </div>
      </Route>
      <Route path="/Hotel(1|2|3|4|5)" exact>
        <Desc/>
      </Route>
      <Route path="/cart" exact>
        <Payment/>
      </Route>
    </div>
  );
}

export default App;
