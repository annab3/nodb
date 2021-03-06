import React, { Component } from "react";
import Grid from "./grid";

export default class Home extends Component {
  triggerChange(e, element) {
    this.props.saveMazeClicked(element);
    this.props.pageHandler(e.target.value);
  }

  render() {
    return (
      <div className="display">
        {this.props.mazes.map((element, index) => {
          return (
            <div key={index}>
              <div className="mazeContainer">
                <Grid
                  maze={element.maze}
                  page={this.props.page}
                  element={element}
                />
              </div>
              <div>
                <button
                  value={"update"}
                  onClick={e => this.triggerChange(e, element)}
                >
                  Edit
                </button>
                <button
                  value={"play"}
                  onClick={e => this.triggerChange(e, element)}
                >
                  Play
                </button>
                {console.log(element.id)}
                <button onClick={() => this.props.deleteMaze(element.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
