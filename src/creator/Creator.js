import React from 'react';
import TextArea from './TextArea';
import YouTube from 'react-youtube';
import RelaxTime from './RelaxTime';
import Reps from './Reps';
import { isEmpty } from 'lodash';
import ButtonAdd from './Button';
import Exercise from '../classes/Exercise.js';

class Creator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      url: undefined,
      time: 60,
      reps: 0
    };

    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handleRepsChange = this.handleRepsChange.bind(this)
    this.handleExerciseAdd = this.handleExerciseAdd.bind(this)
  }

  handleUrlChange(newUrl) {
    this.setState({
      url: newUrl
    })
  }

  handleTimeChange(newTime) {
    this.setState({
      time: newTime
    })
  }

  handleRepsChange(newReps) {
    this.setState({
      reps: newReps
    })
  }

  handleExerciseAdd() {
    let newExercise = new Exercise(this.state.reps,
      this.state.url,
      this.state.time);
    console.log(newExercise);
  }

  render() {
    const opts = {
      height: '100',
      width: '200',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    console.log(this.state.url);
    return (
      <div className="left-half">
        <h2>Ćwiczenie</h2>
        <div className={"text-area"}><TextArea handleUrlChange={this.handleUrlChange} />
        </div>
        {this.youtubePreview(opts)}
        <div className={"relax-time"}>
          <RelaxTime handleTimeChange={this.handleTimeChange} />
          <Reps handleRepsChange={this.handleRepsChange} /></div>
      <ButtonAdd handleExerciseAdd={this.handleExerciseAdd}></ButtonAdd>  
      </div>
    );
  }

  youtubePreview(opts) {
    let youtube;
    let empty = isEmpty(this.state.url);
    if (!empty) {
      youtube = <div><YouTube videoId={this.state.url} opts={opts} onReady={this._onReady} /></div>;
    } else {
      youtube = <div />;
    }
    return youtube;
  }
}

export default Creator;
