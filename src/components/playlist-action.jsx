import React from "react";
import { connect } from "react-redux";
import { onGameOver } from "../actions/actions";
import "../App.css";

class PlaylistAction extends React.Component {
  modalWindow = info => {
    return (
      <div id="1" className="container-modal-window">
        <h2 className="modal-window-text">{info}</h2>
        <button
          className="modal-window-button"
          onClick={() => this.closeModalWindow()}
        >
          Close
        </button>
      </div>
    );
  };

  closeModalWindow = () => {
    const elemModalWindow = document.querySelectorAll(
      ".container-modal-window"
    )[0];
    elemModalWindow.style.display = "none";
    this.props.onGameOver();
  };

  render() {
    const { players } = this.props;
    let winner = false;
    let textWinner = "";

    let actions = [];
    actions = actions.concat(
      players[0].playerFirstAction,
      players[1].playerSecondAction
    );

    if (players[0].playerFirstHealth <= 0) {
      textWinner = "Game over. The second player won!";
      winner = true;
    } else if (players[1].playerSecondHealth <= 0) {
      textWinner = "Game over. The first player won!";
      winner = true;
    }

    return (
      <div>
        {winner && this.modalWindow(textWinner)}
        <ul className="container-ul-actions">
          {actions.map((item, index) => (
            <li className="players-actions" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = dispatch => ({
  onGameOver: () => dispatch(onGameOver())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistAction);