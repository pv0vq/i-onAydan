import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import configureStore from "./redux/reducerIndex";



const { store, persistor } = configureStore();

const Root = () =>(
    <React.StrictMode>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
        </Provider>
   </React.StrictMode>
);
ReactDOM.render(<Root />, document.getElementById("root"));

