import './App.css';
import React from "react";
import {Provider} from "react-redux";
import {store} from "./store";
import Container from "./components/Container/Container";

function App() {
    return (
        <Provider store={store}>
        <div className="App">
            <Container/>
        </div>
        </Provider>
    );
}

export default App;
