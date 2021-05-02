
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/layouts/Header';
import Sidebar from "./components/layouts/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Contact from "./components/contact/Contact";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-10 ">
              <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
