
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Contact from "./components/contact/Contact";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container-fluid">
          <div className="row">
            <Sidebar />

            <main role="main" className="col-md-10 main">
              <Switch>
                <Route exact path="/" component={Dashboard} />
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
