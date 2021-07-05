import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Home from "./../Home/Home";
import Contact from "./../Contact/Contact";
import Skills from "./../Skills/Skills";
import Projects from "./../Projects/Projects";
import About from "./../About/About";
import Navbar from "./../Navbar/Navbar";
import GoHome from "./../GoHome/GoHome";

const App = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <Navbar />
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/projects" exact component={Projects}></Route>
          <Route path="/skills" exact component={Skills}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <GoHome />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
