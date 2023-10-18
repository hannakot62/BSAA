import './App.css';
import Card from "./components/Card/Card";
import React from "react";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    return (
        <Provider store={store}>
        <div className="App">
            <Card/>
        </div>
        </Provider>
    );
}

export default App;
