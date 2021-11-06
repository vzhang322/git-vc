import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./Components/NavBar/Navbar";
import Blog from "./Components/pages/Blog";
import Home from "./Components/pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {
  return (
    <>
      <AppNavbar />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
