import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap"

class RelaxTime extends Component {

  constructor(props) {
    super(props);

    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleTimeChange(event) {
    this.props.handleTimeChange(event.target.value);
  }

  render() {

    return (
      <div className={"col-md"}>
      <InputGroup className={"mb-3"}>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon3" pattern="[0-9]*">
            Seconds
        </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl  minlength="1" pattern="[0-9]*"
          placeholder="60"
          aria-describedby="basic-addon1"
          onChange={this.handleTimeChange} />
        
      </InputGroup>
      </div>
    );
  }
}

export default RelaxTime;