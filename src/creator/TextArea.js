import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap"

class TextArea extends Component {

  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.props.handleUrlChange(event.target.value);
  }

  render() {

    return (
      <div className={"col-md"}>
      <InputGroup className={"mb-3"}>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon3">
            https://www.youtube.com/watch?v=
        </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl type="text"
          placeholder="mx3krJHlUzc"
          aria-describedby="basic-addon1"
          onChange={this.handleTextChange} />
      </InputGroup>
      </div>
    );
  }
}

export default TextArea;