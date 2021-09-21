import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Sidebar from "./components/sidebar-nav/index";
import HomePage from "./components/homepage";
import About from "./components/about";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";

// routes
import Swif2Route from "./routes/swif2";

const routes = [
  {
    exactPath: "/",
    component: HomePage,
  },
  {
    path: "/about/",
    component: About,
  },
  {
    path: "/contact/",
    component: Contact,
  },
  {
    path: "/portfolio",
    component: Portfolio,
    routes: [
      {
        path: "/portfolio/swif2/",
        component: Swif2Route,
      },
    ],
  },
];

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about/">
            <About />
          </Route>
          <Route path="/contact/">
            <Contact />
          </Route>
          <Route exact path="/portfolio/">
            <Portfolio />
          </Route>
          <Route exact path="/portfolio/swif2ip">
            <Swif2Route />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
