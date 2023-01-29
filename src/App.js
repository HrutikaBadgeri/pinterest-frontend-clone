import "./App.css";
import Navigation from "./Components/Navigation";
import Today from "./Components/Today";
import Home from "./Components/Home";
import IdeaPin from "./Components/IdeaPin";
import Settings from "./Components/Settings";
import CreatePin from "./Components/CreatePin";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import PublicProfile from "./Components/Settings/PublicProfile";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Today" element={<Today />} />
        <Route exact path="IdeaPin" element={<IdeaPin />} />
        <Route exact path="CreatePin" element={<CreatePin />} />
        <Route exact path="Settings" element={<Settings />}>
          <Route exact path="PublicProfile" element={<PublicProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
