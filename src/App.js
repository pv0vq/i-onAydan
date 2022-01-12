import React, {useEffect, useState} from 'react';
import Navbar from "./components/Navbar";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import routerlist from "./routerlist";


function App() {


    return(
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <div className="container">
                    <Routes>
                        {routerlist.map(route => {
                            return(
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={ <route.component/>} >
                                </Route>
                            )
                        })}
                      {/*  <Route path="/movies" element={ <Movies/>} >
                        </Route>
                        <Route path="/user" element={ <AniMal/>}>
                        </Route>
                        <Route path="/" element={ <AniMalGridList/>}>
                        </Route>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
  );
}

export default App;
