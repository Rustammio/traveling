import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/SignUp" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
