import React, { Component } from "react";
import TilesDisplayed from "./tilesDisplayed";
import Grid from "./grid";

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maze: this.props.element.maze,
      endRow: this.props.element.maze.rows,
      endColumn: this.props.element.maze.columns,
      tile: ""
    };
    this.createMazeObject = this.createMazeObject.bind(this);
    this.setPiece = this.setPiece.bind(this);
    this.selectPiece = this.selectPiece.bind(this);
  }
  createMazeObject() {
    // creates an object to send in .post
    let { maze } = this.state;
    let object = {
      name: this.props.element.name,
      rows: this.props.element.rows,
      columns: this.props.element.columns,
      maze
    };
    let index = this.props.mazes.findIndex(
      thing => thing === this.props.element
    );
    this.props.updateMaze(index, object);
    this.props.pageHandler("home");
  }
  selectPiece(className) {
    this.setState({ tile: className });
  }

  setPiece(row, column) {
    // changes a specific spot from the default div to a new one
    let { maze, tile } = this.state;
    maze[row][column].tile = tile;
    maze[row][column].show = "";
    this.setState({ maze });
  }

  render() {
    return (
      <main id="createMain">
        <TilesDisplayed selectPiece={this.selectPiece} />
        <div className="createBox">
          {/* Grid displays the maze passed in */}
          <Grid
            maze={this.props.element.maze}
            setPiece={this.setPiece}
            page={this.props.page}
          />

          <button onClick={() => this.createMazeObject()}>Update</button>
        </div>
      </main>
    );
  }
}
