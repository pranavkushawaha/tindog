import React from 'react';
import { BrowserRouter , Switch , Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Title from './components/Title';
import Feature from './components/Feature';
import Testimonial from './components/Testimonial';
import Press from './components/Press';
import Pricing from './components/Pricing';
import Cta from './components/Cta';
import Footer from './components/Footer';


const App = () => {
  
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Title/>
        </Route>
        <Route exact path='/feature'>
          <Feature/>
        </Route>
        <Route exact path='/testimonial'>
          <Testimonial/>
        </Route>
        <Route exact path='/press'>
          <Press/>
        </Route>
        <Route exact path='/pricing'>
          <Pricing/>
        </Route>
        <Route exact path='/cta'>
          <Cta/>
          <Footer/>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
