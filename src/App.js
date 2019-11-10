import React from "react";
import { connect } from "react-redux";
import { onChangeHealth, onChangeAddHealth } from "./actions/actions";
import PlaylistHealth from "./components/playlist-health";
import PlaylistAction from "./components/playlist-action";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomRange: [1, 3, 18, 25, 10, 35]
    };
  }

  firtBtn = () => {
    let firtBtnPlayer = 1;
    this.onMovePlayer(firtBtnPlayer);
  };

  secondBtn = () => {
    let secondBtnPlayer = 2;
    this.onMovePlayer(secondBtnPlayer);
  };

  onMovePlayer = movePlayer => {
    let mainRandomRange = Math.floor(
      Math.random() *
        (this.state.randomRange[1] - this.state.randomRange[0] + 1) +
        this.state.randomRange[0]
    );

    switch (mainRandomRange) {
      case 1:
        let firstRandomRange = Math.floor(
          Math.random() *
            (this.state.randomRange[3] - this.state.randomRange[2] + 1) +
            this.state.randomRange[2]
        );
        if (movePlayer === 1) {
          this.props.onChangeHealth({
            damage: firstRandomRange,
            player: movePlayer,
            comment: `Player first damage: ${firstRandomRange}`
          });
        } else if (movePlayer === 2) {
          this.props.onChangeHealth({
            damage: firstRandomRange,
            player: movePlayer,
            comment: `Player second damage: ${firstRandomRange}`
          });
        }
        break;

      case 2:
        let secondRandomRange = Math.floor(
          Math.random() *
            (this.state.randomRange[5] - this.state.randomRange[4] + 1) +
            this.state.randomRange[4]
        );
        if (movePlayer === 1) {
          this.props.onChangeHealth({
            damage: secondRandomRange,
            player: movePlayer,
            comment: `Player first damage: ${secondRandomRange}`
          });
        } else if (movePlayer === 2) {
          this.props.onChangeHealth({
            damage: secondRandomRange,
            player: movePlayer,
            comment: `Player second damage: ${secondRandomRange}`
          });
        }
        break;

      case 3:
        let thirdRandomRange = Math.floor(
          Math.random() *
            (this.state.randomRange[3] - this.state.randomRange[2] + 1) +
            this.state.randomRange[2]
        );
        if (movePlayer === 1) {
          this.props.onChangeAddHealth({
            addHealth: thirdRandomRange,
            player: movePlayer,
            comment: `Player first add health: ${thirdRandomRange}`
          });
        } else if (movePlayer === 2) {
          this.props.onChangeAddHealth({
            addHealth: thirdRandomRange,
            player: movePlayer,
            comment: `Player second add health: ${thirdRandomRange}`
          });
        }
        break;

      default:
        alert("Houston we have a problem :)");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="container-btn">
          <button className="btn" onClick={() => this.firtBtn()}>
            Player1
          </button>
          <button className="btn" onClick={() => this.secondBtn()}>
            Player2
          </button>
        </div>
        <PlaylistHealth />
        <PlaylistAction />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeHealth: data => dispatch(onChangeHealth(data)),
  onChangeAddHealth: data => dispatch(onChangeAddHealth(data))
});

export default connect(
  null,
  mapDispatchToProps
)(App);