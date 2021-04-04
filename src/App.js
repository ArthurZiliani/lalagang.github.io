/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import logo from './image/logo1.png';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FooterContainer } from "./containers/footer";
import Home from "./pages/index";
import Scroll from "./Components/scroll/arvore"
import './App.css';

function App() {
  return (
    <Router>

      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <FooterContainer />
    </Router>
  );
}

export default App;
