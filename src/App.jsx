
import { useState } from 'react';
import './App.css'

const App = () => {
  const [brk, setBrk] = useState(5);
  const [sess, setSess] = useState(25);
  const [isTicking, setIsTicking] = useState(false);

  const increment = (param) => {
    if (param == "break" && brk != 60) {
      setBrk(brk + 1);
    } else if (param == "session" && sess != 60) {
      setSess(sess + 1);
    }
  };

  const decrement = (param) => {
    if (param == "break" && brk != 1) {
      setBrk(brk - 1);
    } else if (param == "session" && sess != 1) {
      setSess(sess - 1);
    }
  };

  const reset = () => {
    setSess(25);
    setBrk(5);
    setIsTicking(false);
  };

  return (
    <>
      <div className="app">
        <h1 id="title">Pomodoro 🍅</h1>
        <div id="timer-box" className={isTicking ? "active-tick" : null}>
          <h2 id="timer-label">Session</h2>
          <h1 id="time-left">{sess}:00</h1>
          <div id="ctrl-btns">
            <button id="start_stop" onClick={() => setIsTicking(!isTicking)}>
              {isTicking ? <>&#x23F8;</> : <>&#9658;</>}
            </button>
            <button id="reset" onClick={reset}>
              &#x23F9;
            </button>
          </div>
        </div>
        <div id="length-control">
          <div className="length-div">
            <h2 id="session-label">Session Length</h2>
            <button id="session-decrement" onClick={() => decrement("session")}>
              {"<<"}
            </button>
            <h3 id="session-length">{sess}</h3>
            <button id="session-increment" onClick={() => increment("session")}>
              {">>"}
            </button>
          </div>
          <div className="length-div">
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

export default App
