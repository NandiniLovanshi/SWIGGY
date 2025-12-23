import React from 'react'
import SwiggyLanding from './components/SwiggyLanding.jsx'
import FoodCollection from './components/FoodCollection.jsx'
import InstaMartScroll from './components/InstaMartScroll.jsx'
import DineoutScroll from './components/DineoutScroll.jsx'
import AppNow from './components/AppNow.jsx'
import CitiesSection from './components/CitiesSection.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'

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