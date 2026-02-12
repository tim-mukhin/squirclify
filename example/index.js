import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { Squircle } from "./Squircle";
import { squirclify } from "./squirclify";

import "./styles.css";

function App() {
    useEffect(() => {
        document
            .querySelectorAll("[data-squirclify]")
            .forEach((el) => squirclify(el));
    }, []);

    return (
        <div className="page">
            <h1>Squirclify comparison examples</h1>
            <p>
                Each row is one test case: React wrapper, vanilla JS, and plain
                CSS border-radius.
            </p>

            <h2>Case 1: baseline card (radius 70px)</h2>
            <div className="items">
                <Squircle className="squircle case-base">
                    <div className="ugly-child-wrapper">
                        <h3>Squircle (React)</h3>
                        <hr />
                        Stable medium radius on default card size.
                    </div>
                </Squircle>
                <div className="squircle case-base" data-squirclify>
                    <div className="ugly-child-wrapper">
                        <h3>Squircle (JS)</h3>
                        <hr />
                        Same geometry via direct function call.
                    </div>
                </div>
                <div className="not-squircle case-base">
                    <div className="ugly-child-wrapper">
                        <h3>Standard border-radius</h3>
                        <hr />
                        Native CSS corner interpolation.
                    </div>
                </div>
            </div>

            <h2>Case 2: tiny square, huge radius (9999px)</h2>
            <div className="items">
                <Squircle className="squircle case-tiny">
                    <div className="ugly-child-wrapper">
                        <h3>Squircle (React)</h3>
                    </div>
                </Squircle>
                <div className="squircle case-tiny" data-squirclify>
                    <div className="ugly-child-wrapper">
                        <h3>Squircle (JS)</h3>
                    </div>
                </div>
                <div className="not-squircle case-tiny">
                    <div className="ugly-child-wrapper">
                        <h3>Standard border-radius</h3>
                    </div>
                </div>
            </div>

            <h2>Case 3: wide rectangle, large radius (80px)</h2>
            <div className="items">
                <Squircle className="squircle case-wide">
                    <div className="ugly-child-wrapper">
                        <h3>Squircle (React)</h3>
                        <hr />
                        Tests horizontal shape behavior.
                    </div>
                </Squircle>
                <div className="squircle case-wide" data-squirclify>
                    <div className="ugly-child-wrapper">
                        <h3>Squircle (JS)</h3>
                        <hr />
                        Same case in vanilla mode.
                    </div>
                </div>
                <div className="not-squircle case-wide">
                    <div className="ugly-child-wrapper">
                        <h3>Standard border-radius</h3>
                        <hr />
                        Visual baseline for comparison.
                    </div>
                </div>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
