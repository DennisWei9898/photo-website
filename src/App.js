import React from "react";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import {Switch, Route} from "react-router-dom"
import "./styles/style.css"
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }
// require('dotenv').config()

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
