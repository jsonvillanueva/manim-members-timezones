﻿import React, { useState } from "react";

import Clock from "react-live-clock";
import "./main.scss";

function App() {
  const [dformat, setdformat] = useState(true);
  console.log(dformat);
  var nameList = {
    names: [
      ["EulerTour", "America/Santa_Isabel"],
      ["YoshiAsk", "America/Santa_Isabel"],
      ["paradox", "America/Santa_Isabel"],
      ["TheQuarantinedSpy", "America/Santa_Isabel"],
      ["leotrs", "America/Blanc-Sablon"],
      ["🔥PgSuper🔥", "America/Sao_Paulo"],
      ["huguesdvmx", "Europe/Paris"],
      ["XorUnison", "Europe/Paris"],
      ["kolibril13", "Europe/Paris"],
      ["Aathish04", "Asia/Kolkata"],
      ["kilacoda", "Asia/Kolkata"],
    ],
  };
  //true for 24 hour format and false for AM/Pm format
  function ampmbutton() {
    //if (dformat === "ampm") {
    if (dformat === true) {
      setdformat((dformat) => (dformat = false));
    } else {
      setdformat((dformat) => (dformat = true));
    }
  }
  return (
    <div className="container-fluid">
      <h1 className="primary">Manim Community Members TimeZones</h1>
      <div className="main-clock">
        <div className="labelswitch">
          <label for="ampmswitch">AM/PM
          </label>
          <label class="switch">
            <input
              type="checkbox"
              id="ampmswitch"
              checked={dformat}
              onChange={ampmbutton}
            />
            <span class="slider round"></span>
          </label>
          <label for="ampmswitch">24-hour</label>
        </div>
        {dformat === false &&
          nameList.names.map((variant, idx) => (
            <div>
              <b>{variant[0]}</b> :{" "}
              <Clock
                format={"hh:mm:ss A"}
                ticking={true}
                timezone={variant[1]}
              />
            </div>
          ))}
        {dformat === true &&
          nameList.names.map((variant, idx) => (
            <div>
              <b>{variant[0]}</b> :{" "}
              <Clock format={"HH:mm:ss"} ticking={true} timezone={variant[1]} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
