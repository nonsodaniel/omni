
import React from 'react';
import Home from "./components/home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Header />
        <Route exact path="/" component={Home} />
        <Footer /> */}
        Hello
      </div>
    </BrowserRouter>
  );
};

export default App;
