import { BrowserRouter, Routes, Route } from "react-router-dom";
import SwiggyLanding from "./components/SwiggyLanding.jsx";
import FoodCollection from "./components/FoodCollection.jsx";
import InstamartScroll from "./components/InstamartScroll.jsx";
import DineoutScroll from "./components/DineoutScroll.jsx";
import AppNow from "./Components/AppNow.jsx";
import CitiesSection from "./components/CitiesSection.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  return (
    <div>
      <SwiggyLanding />
      <FoodCollection />
      <InstamartScroll />
      <DineoutScroll />
      <AppNow />
      <CitiesSection />
      <Footer />
      <Login />
      <Signup />
      
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>

      
    </div>
  );
}

export default App;

