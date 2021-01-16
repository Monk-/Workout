import React, { Component } from "react";
import { Button } from "react-bootstrap"

class ButtonAdd extends Component {

    constructor(props) {
        super(props);

        this.handleExerciseAdd = this.handleExerciseAdd.bind(this);
    }

    handleExerciseAdd(event) {
        this.props.handleExerciseAdd();
    }

    render() {
        return (
            <div className={"col-md"}>
                <Button onClick={this.handleExerciseAdd}>Add</Button>
            </div>
        );
    }
}

export default ButtonAdd;