import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      timer: 1500,
      break: 300,
      session: 1500,
      running: false,
      grindTime: true,
    };
  }
  countdownTimer = () => {
    const { timer, session, grindTime } = this.state;
    if (timer > 0 && this.state.grindTime === true) {
      this.setState({
        timer: timer - 1,
      });
    } else if (timer === 0) {
      this.audio.currentTime = 0;
      this.audio.play();
      if (grindTime) {
        this.setState({
          grindTime: false,
          timer: this.state.break,
        });
      } else {
        this.setState({
          grindTime: true,
          timer: session,
        });
      }
    }
  };

  starTimer = () => {
    if (!this.state.running) {
      this.intervalID = setInterval(this.countdownTimer, 1000);
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
      clearInterval(this.intervalID);
      this.setState({
        running: false,
      });
    }
  };

  pauseTimer = () => {
    clearInterval(this.intervalID);
    this.setState({
      running: false,
    });
  };

  resetTimer = () => {
    this.audio.currentTime = 0;
    this.audio.pause();
    clearInterval(this.intervalID);
    this.setState({
      timer: 1500,
      break: 300,
      session: 1500,
      grindTime: true,
    });
  };

  upBreak = () => {
    if (this.state.break < 3600) {
      this.setState({
        break: this.state.break + 60,
      });
    }
  };

  downBreak = () => {
    if (this.state.break > 1) {
      this.setState({
        break: this.state.break - 60,
      });
    }
  };

  upSession = () =>{
  if(this.state.session <  3600){
   this.setState({
     session: this.state.session + 60,
     timer: this.state.timer + 60
   })
  }
  }

  downSession = () => {
   if(this.state.session > 60){
     this.setState({
       session: this.state.session - 60,
       timer: this.state.timer - 60
     })
   }
  }

  render() {
    return (
      <div>
        <Header />
        <Clock upBreak={this.upBreak}
        downBreak={this.downBreak}
        upSession={this.upSession}
        downSession={this.downSession}
        starTimer={this.starTimer}
        pauseTimer={this.pauseTimer}
        resetTimer={this.resetTimer}
        data={this.state}
        />
        <audio
          id="beep"
          ref={(input) => (this.audio = input)}
          src="http://audio.marsupialgurgle.com/audio/successtrumpet.mp3"
        />
        <Footer />
      </div>
    );
  }
}

export default Clock;
