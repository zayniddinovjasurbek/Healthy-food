import React from 'react'
import "./App.css"
import Header from "./components//header/Header"
import Main from "./components//main/Main"
import About from "./components/about/About"
import Work from  "./components/work/Work"
import Dishes from "./components/dishes/Dishes"
import Chefs from "./components/chefs/Chefs"
import Recipes from "./components/recipes/Recipes"
import Social from "./components/social/Social"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Work />
      <Dishes />
      <Chefs />
      <Recipes />
      <Social />
      <Footer />
    </div>
  )
}

export default App
