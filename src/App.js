import logo from "./logo.svg";
import "./App.css";
import Signup from "./Page/Signup";
import Signin from "./Page/Signin";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </Router>
      {/* <Signup /> */}
      {/* <Signin /> */}
    </div>
  );
}

export default App;
