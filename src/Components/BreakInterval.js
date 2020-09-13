import React from "react";

function BreakInterval(props) {
  return (
    <div className="container">
      <h2 id="break-label">break length</h2>
      <h2 id="break-label">session length</h2>
      <button id="break-increment" onClick={props.upBreak}>
        <i className="fas fa-arrow-up" />
      </button>
      <h2 id="break-length">{props.data.break / 60}</h2>
      <button id="break-decrement" onClick={props.downBreak}>
        <i className="fas fa-arrow-down" />
      </button>
      <button id="session-increment" onClick={props.upSession}>
        <i className="fas fa-arrow-up" />
      </button>
      <h2 id="session-decrement">{props.data.session / 60}</h2>
      <button id="session-decrement" onClick={props.downSession}>
        <i className="fas fa-arrow-down" />
      </button>
      <div className="timer">
        <h2 id="timer-label">
          {props.data.grindTime === true ? "session" : "break"}
        </h2>
        <h2 id="time-left">
          {Math.floor(props.data.timer / 60) < 10
            ? "0" + Math.floor(props.data.timer / 60)
            : Math.floor(props.data.timer / 60)}
          :{Math.floor(props.data.timer % 60) < 10
          ? "0" + Math.floor(props.data.timer % 60)
          :Math.floor(props.data.timer % 60)}
        </h2>
      </div>
      <button id="start_stop" onClick={props.startTimer}>
        <i className="fas fa-play" />
      </button>
      <button id="pause" onClick={props.pauseTimer}>
        <i className="fas fa-pause" />
      </button>
      <button id="reset" onClick={props.resetTimer}>
        <i className="fas fa-sync-alt" />
      </button>
    </div>
  );
}

export default BreakInterval;