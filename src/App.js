import React from "react";
// Pages
import Home from "./Pages/Home";
// Components
import Navbar from "./Components/Navbar";
import Slide from "./Components/Slide";
import Inform from "./Components/inform";
import AboutSite from "./Components/AboutSite";
import GifBlock from "./Components/GifBlock";
import Footer from "./Components/Footer";
import "./App.css";
// Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="">
                        <Slide />
                    </Route>
                    <Route>
                        <Inform />
                    </Route>
                    <Route>
                        <AboutSite />
                    </Route>
                    <Route>
                        <GifBlock />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
