import React from 'react'
import SwiggyLanding from './Components/SwiggyLanding.jsx'
import FoodCollection from './Components/FoodCollection.jsx'
import InstaMartScroll from './Components/InstaMartScroll.jsx'
import DineoutScroll from './Components/DineoutScroll.jsx'
import AppNow from './Components/AppNow.jsx'
import CitiesSection from './Components/CitiesSection.jsx'
import Footer from './Components/Footer.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'

function App() {
  return (
    <div>
      <SwiggyLanding />
      <FoodCollection />
      <InstaMartScroll />
      <DineoutScroll />
      <AppNow />
      <CitiesSection />
      <Footer />
      <Login />
      <Signup />
    </div>
  );
}

export default App