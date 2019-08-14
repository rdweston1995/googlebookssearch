import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
// import Search from "./components/search";
// import Results from "./components/results";
import SearchPage from "./pages/search.js";
import SavedPage from "./pages/saved.js";

// function App() {
//   return (
//     <div className="container">
//       <Navbar />
//       <Jumbotron />
//       <Search />
//       <Results />
//     </div>
//   );
// }

class App extends Component {
  state = {};

  render(){
    return(
      <Router>
        <div >
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={SearchPage}/>
            <Route exact path="/saved" component={SavedPage}/>
            <Route component={SearchPage}/>
          </Switch>
          {/* {/* <Navbar />
          <Jumbotron />
          <Search />
          <Results /> */}
        </div>
      </Router>

    )
  }
}

export default App;
