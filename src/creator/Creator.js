import React from 'react';
import TextArea from './TextArea';
import YouTube from 'react-youtube';
import RelaxTime from './RelaxTime';

class Creator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      url: undefined,
      time: 60
    };

    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
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
      <div className="container parent">
        <div className="row">
          <h3 className="col-md">{this.state.url}</h3>
          <TextArea handleUrlChange={this.handleUrlChange} />
          <div className="col-md"><YouTube videoId={this.state.url} opts={opts} onReady={this._onReady} /></div>
          <div className="col-md"><RelaxTime handleTimeChange={this.handleTimeChange} /></div>
        </div>
      </div>
    );
  }
}

export default Creator;
