
import './App.css'

const App = () => {
  const hour = "25";
  const minute = "00";

  return (
    <>
      <div className="app">
        <h1 id="title">POMODORO timer</h1>
        <div id="length-control">
          <div className="length-div">
            <h2 id="break-label">Break Length</h2>
            <button id="break-decrement">down</button>
            <h3 id="break-length">5</h3>
            <button id="break-increment">up</button>
          </div>
          <div className="length-div">
            <h2 id="session-label">Session Length</h2>
            <button id="session-decrement">down</button>
            <h3 id="session-length">25</h3>
            <button id="session-increment">up</button>
          </div>
        </div>
        <div className="timer-box">
          <h2 id="timer-label">Session</h2>
          <h1 id="time-left">
            {hour}:{minute}
          </h1>
          <button id="start_stop">play/pouse</button>
          <button id="reset">reset</button>
        </div>
      </div>
    </>
  );
};

export default App
