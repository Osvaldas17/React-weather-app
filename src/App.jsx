
import './App.scss';
import { createStore } from 'redux'
import {RootReducer} from "./Redux/CombinedReducers";
import {Provider} from "react-redux";
import MainComponent from "./Components/MainComponent";
import HeaderSearchBarComponent from "./Components/SubHeaderComponents/HeaderSearchBarComponent";
import {BrowserRouter as Router,Link} from "react-router-dom";
import React from "react";

const store = createStore(RootReducer)

function App() {

    return (
        <Router>
            <Provider store={store}>
                <div className="App">
                        <header className="App-header">
                            <Link to="/">
                                <div className='homeBtn'>Home</div>
                            </Link>
                            <HeaderSearchBarComponent/>
                        </header>
                    <div className='content-wrapper'>
                        <main>
                            <MainComponent/>
                        </main>
                        <footer>
                        </footer>
                    </div>
                </div>
            </Provider>
        </Router>
    );
}

export default App;
