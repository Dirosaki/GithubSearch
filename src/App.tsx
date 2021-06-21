import { BrowserRouter as Router, Route } from "react-router-dom";
import { ProfileContextProvider } from "./contexts/UserContext";
import Details from "./pages/Details";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

import "./styles/global.scss";

function App() {
  return (
    <Router>
      <ProfileContextProvider>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/details/:name" component={Details} />
      </ProfileContextProvider>
    </Router>
  );
}

export default App;
