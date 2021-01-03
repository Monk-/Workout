import React from 'react';
import TextArea from './TextArea';
import YouTube from 'react-youtube';
import RelaxTime from './RelaxTime';
import { isEmpty } from 'lodash';

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
    let youtube;
    let empty = isEmpty(this.state.url);
    if (!empty) {
      youtube = <div><YouTube videoId={this.state.url} opts={opts} onReady={this._onReady} /></div>;
    } else {
      youtube = <div />;
    }
    return (
      <div className="left-half">
        <h2>Ćwiczenie</h2>
        <div className={"text-area"}><TextArea handleUrlChange={this.handleUrlChange} />
        </div>
        {youtube}
        <div className={"relax-time"}><RelaxTime handleTimeChange={this.handleTimeChange} /></div>
      </div>
    );
  }
}

export default Creator;
