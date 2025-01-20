import { useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [brk, setBrk] = useState(5); // session time
  const [sess, setSess] = useState(25); // break time
  const [session, setSesson] = useState(true); // weather it's session mode or break mode
  const [isTicking, setIsTicking] = useState(false); //weather timer is on or off
  const [activeCount, setActiveCount] = useState(0); // active sessions count
  const [time, setTime] = useState(25 * 60); //total time as seconds
  const [sesName, setSesName] = useState("click here to edit");

  const timeRef = useRef(); // reference of time, idk exactly how it works
  const minutes = Math.floor(time / 60); // minutes are total time divided by 60
  const seconds = time % 60; // seconds that are shown, not total seconds

  //if time is more than 1 sec, it keeps decreasing, if not it stops and changes into another mode
  const updateTimer = () => {
    setTime((prev) => {
      if (prev >= 1) {
        setTime(prev - 1);
      } else {
        stopTimer();
        setSesson(!session);
        setTime(session ? brk * 60 : sess * 60);
        setActiveCount(0);
      }
    });
  };

  // when i click start button timer starts, if it's first click on start,
  // time is set as we modified it below on controls, if it's not first time
  // then clicking on button will only continues
  const startTimer = () => {
    if (activeCount == 0) {
      session ? setTime(sess * 60) : setTime(brk * 60);
      setActiveCount(activeCount + 1);
    }
    timeRef.current = setInterval(updateTimer, 1000);
    setIsTicking(true);
  };

  // if i click stop button than timer stops
  const stopTimer = () => {
    setIsTicking(false);
    clearInterval(timeRef.current);
  };

  // if i click on reset button it resets all the progress to the default values
  const resetTimer = () => {
    setSess(25);
    setBrk(5);
    stopTimer();
    setTime(25 * 60);
    setActiveCount(0);
  };

  //increments values of session lenght and break lenght
  const increment = (param) => {
    if (!isTicking) {
      if (param == "break" && brk != 60) {
        setBrk(brk + 1);
      } else if (param == "session" && sess != 60) {
        setSess(sess + 1);
      }
    }
  };

  //decrements values of session and break lenghtes
  const decrement = (param) => {
    if (!isTicking) {
      if (param == "break" && brk != 1) {
        setBrk(brk - 1);
      } else if (param == "session" && sess != 1) {
        setSess(sess - 1);
      }
    }
  };

  return (
    <>
      <div className="app">
        <input
          id="title"
          value={sesName}
          onChange={(e) => setSesName(e.target.value)}
          onClick={() =>
            sesName === "click here to edit" ? setSesName("") : null
          }
          // how can i return placeholder text if nothing is written
        />
        <div id="timer-box" className={isTicking ? "active-tick" : null}>
          <h2 id="timer-label">{session ? "Session" : "Break"}</h2>
          <h1 id="time-left">
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </h1>
          <div id="ctrl-btns">
            <button
              id="start_stop"
              onClick={() => (isTicking ? stopTimer() : startTimer())}
            >
              {isTicking ? <>&#x23F8;</> : <>&#9658;</>}
            </button>
            <button id="reset" onClick={resetTimer}>
              &#x23F9;
            </button>
          </div>
        </div>
        <div id="length-control">
          <div className={`length-div ${!isTicking ? "active" : null}`}>
            <h2 id="session-label">Session Length</h2>
            <button id="session-decrement" onClick={() => decrement("session")}>
              {"<<"}
            </button>
            <h3 id="session-length">{sess}</h3>
            <button id="session-increment" onClick={() => increment("session")}>
              {">>"}
            </button>
          </div>
          <div className={`length-div ${!isTicking ? "active" : null}`}>
            <h2 id="break-label">Break Length</h2>
            <button id="break-decrement" onClick={() => decrement("break")}>
              {"<<"}
            </button>
            <h3 id="break-length">{brk}</h3>
            <button id="break-increment" onClick={() => increment("break")}>
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
