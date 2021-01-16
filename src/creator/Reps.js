import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap"

class Reps extends Component {

  constructor(props) {
    super(props);

    this.handleRepsChange = this.handleRepsChange.bind(this);
  }

  handleRepsChange(event) {
    this.props.handleRepsChange(event.target.value);
  }

  render() {

    return (
      <div className={"col-md"}>
      <InputGroup className={"mb-3"}>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon3" pattern="[0-9]*">
            Repetitions
        </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl  minLength="1" pattern="[0-9]*"
          placeholder="10"
          aria-describedby="basic-addon1"
          onChange={this.handleRepsChange} />
        
      </InputGroup>
      </div>
    );
  }
}

export default Reps;