import React from 'react';
import './App.css';
import BreakInterval from './Components/Breakinterval';
import SessionLength from './Components/Session';
import Timer from './Components/Timer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false,
    };
  }

  onIncreaseBreakLength = () => {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1,
      };
    });
  };

  onDecreaseBreakLength = () => {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1,
      };
    });
  }

  onIncreaseSessionLength = () => {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1,
      };
    });
  }

  onDecreaseSessionLength = () => {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1,
      };
    });
  }
  onUpdateTimerMinute = () => {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1,
      };
    });
  }

  onToggleInterval = (isSession) => {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength,
      });
    } else {
      this.setState({
        timerMinute: this.state.breakLength,
      });
    }
  }

  onResetTimer = () => {
    this.setState({
      timerMinute: this.state.sessionLength,
    });
  }

  onPlayStopTimer = (isPlay) => {
    this.setState({
      isPlay: isPlay,
    });
  }

  render() {
    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <section className="interval-length-container">
          <BreakInterval
            isPlay={this.state.isPlay}
            breakInterval={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength}
          />
          <SessionLength
            isPlay={this.state.isPlay}
            sessionLength={this.state.sessionLength}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength}
          />
        </section>
        <Timer
          timerMinute={this.state.timerMinute}
          breakLength={this.state.breakLength}
          updateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.onToggleInterval}
          resetTimer={this.onResetTimer}
          onPlayStopTimer={this.onPlayStopTimer}
        />
      </main>
    );
  }
}

export default App;