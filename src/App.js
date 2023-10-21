// import logo from "./logo.svg";
// import "./App.css";
// import { Navbar, NavbarBrand } from "reactstrap";
// import Menu from "./components/MenuComponent.js";
// import Hello from "./components/class/Hello.js";

// import React, { Component } from "react";
// import GreetingContainer from "./components/class/GreetingContainer.js";
// import RandomUser from "./components/class/RandomUser.js";

// import { Provider } from "react-redux";
// import store from "./components/class/redux/store.js";
// import Counter from "./components/class/redux/Counter.js";

// function App() {
//   return (
//     <div className="App">
//       {/* <Hello myId={"DE170429"} myAge="23" a={10} b={5} /> */}

//       <Provider store={store}>
//         <Counter></Counter>
//       </Provider>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import React, { Component } from "react";
import Main from "./components/MainComponent.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore(); 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
