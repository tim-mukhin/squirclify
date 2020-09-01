import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import { Squircle } from "./Squircle";
import { squirclify } from "./squirclify";

import "./styles.css";

function App() {
    const el = useRef(null);

    useEffect(() => {
        squirclify(document.getElementById("squircle"));
    }, []);

    return (
        <div className="items">
            <Squircle className="squircle">
                <div className="ugly-child-wrapper">
                    <h1>Squircle (React)</h1>
                    <hr />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus veniam sed quas, minima doloremque reiciendis
                    corporis vitae debitis obcaecati incidunt nihil itaque
                    consequuntur a, repudiandae harum! Tempora architecto
                    voluptate harum.
                </div>
            </Squircle>
            <div className="squircle" id="squircle">
                <div className="ugly-child-wrapper">
                    <h1>Squircle (JS)</h1>
                    <hr />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus veniam sed quas, minima doloremque reiciendis
                    corporis vitae debitis obcaecati incidunt nihil itaque
                    consequuntur a, repudiandae harum! Tempora architecto
                    voluptate harum.
                </div>
            </div>
            <div className="not-squircle">
                <h1>Standart border radius</h1>
                <hr />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus veniam sed quas, minima doloremque reiciendis
                corporis vitae debitis obcaecati incidunt nihil itaque
                consequuntur a, repudiandae harum! Tempora architecto voluptate
                harum.
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
