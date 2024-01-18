
import { useState } from 'react';
import './App.css'

const App = () => {
  const [brk, setBrk] = useState(5);
  const [sess, setSess] = useState(25);

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
  };

  return (
    <>
      <div className="app">
        <h1 id="title">POMODORO timer</h1>
        <div id="length-control">
          <div className="length-div">
            <h2 id="break-label">Break Length</h2>
            <button id="break-decrement" onClick={() => decrement("break")}>
              down
            </button>
            <h3 id="break-length">{brk}</h3>
            <button id="break-increment" onClick={() => increment("break")}>
              up
            </button>
          </div>
          <div className="length-div">
            <h2 id="session-label">Session Length</h2>
            <button id="session-decrement" onClick={() => decrement("session")}>
              down
            </button>
            <h3 id="session-length">{sess}</h3>
            <button id="session-increment" onClick={() => increment("session")}>
              up
            </button>
          </div>
        </div>
        <div className="timer-box">
          <h2 id="timer-label">Session</h2>
          <div id="time-left">{sess}:00</div>
          <button id="start_stop">play/pouse</button>
          <button id="reset" onClick={reset}>
            reset
          </button>
        </div>
      </div>
    </>
  );
};

export default App
