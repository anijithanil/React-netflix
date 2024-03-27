import {
  action,
  originals,
  comedy,
  horror,
  romance,
  documenteries,
} from "./url";
import React, { useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import RowPost from "./components/RowPost/RowPost";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import app from "./Firebase/config";
import { auth } from "./Firebase/config";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log("logged in");
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <NavBar />
                <Banner />

                <RowPost url={originals} title="Netflix Originals" />
                <RowPost url={action} title="Action" isSmall={true} />
                <RowPost url={comedy} title="Comedy Movies" isSmall={true} />
                <RowPost url={horror} title="Horror" isSmall={true} />
                <RowPost url={romance} title="Romance" isSmall={true} />
                <RowPost
                  url={documenteries}
                  title="Documentries"
                  isSmall={true}
                />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
