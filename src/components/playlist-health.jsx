import React from "react";
import { connect } from "react-redux";
import "../App.css";

class PlaylistHealth extends React.Component {
  render() {
    const { players } = this.props.playersStore;

    return (
      <ul className="container-ul-score">
        {players.map((item, index) => (
          <li className="players-score" key={index}>
            {item.playerFirstHealth}
            {item.playerSecondHealth}
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(
  state => ({
    playersStore: state
  }),
  dispatch => ({})
)(PlaylistHealth);