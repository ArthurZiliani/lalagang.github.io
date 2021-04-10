/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import logo from './image/logo1.png';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FooterContainer } from "./containers/footer";
import Home from "./pages/index";
import Sobre from "./pages/Sobre";
import Form from "./pages/Formulario";
import Loja from "./pages/Loja";
import Cont from "./pages/Contatos";
import Fundo from "./Components/fundo/fundo"
import Scroll from "./Components/scroll/arvore"
import './App.css';





function App() {
  return (
    <Router>

      <Navbar />
      <Fundo></Fundo>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/Sobre" exact component={Sobre} />
        <Route path="/Formulário" exact component={Form} />
        <Route path="/Loja" exact component={Loja} />
        <Route path="/Contatos" exact component={Cont} />

      </Switch>

      <FooterContainer />
    </Router>
  );
}

export default App;
