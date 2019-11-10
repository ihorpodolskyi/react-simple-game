import { TO_DAMAGE, TO_ADD_HEALTH, TO_GAME_OVER } from "../actions/actions";

const initialState = {
  players: [
    {
      playerFirstHealth: 100,
      playerFirstAction: [],
      id: 1
    },
    {
      playerSecondHealth: 100,
      playerSecondAction: [],
      id: 2
    }
  ]
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case TO_DAMAGE:
      if (action.payload.player === 1) {
        return {
          players: [
            {
              playerFirstHealth:
                state.players[0].playerFirstHealth - action.payload.damage,
              playerFirstAction: [
                ...state.players[0].playerFirstAction,
                action.payload.comment
              ],
              id: action.payload.id
            },
            ...state.players.slice(1)
          ]
        };
      } else if (action.payload.player === 2) {
        return {
          players: [
            ...state.players.slice(0, 1),
            {
              playerSecondHealth:
                state.players[1].playerSecondHealth - action.payload.damage,
              playerSecondAction: [
                ...state.players[1].playerSecondAction,
                action.payload.comment
              ],
              id: action.payload.id
            }
          ]
        };
      }
      break;

    case TO_ADD_HEALTH:
      if (action.payload.player === 1) {
        return {
          players: [
            {
              playerFirstHealth:
                state.players[0].playerFirstHealth + action.payload.addHealth,
              playerFirstAction: [
                ...state.players[0].playerFirstAction,
                action.payload.comment
              ],
              id: action.payload.id
            },
            ...state.players.slice(1)
          ]
        };
      } else if (action.payload.player === 2) {
        return {
          players: [
            ...state.players.slice(0, 1),
            {
              playerSecondHealth:
                state.players[1].playerSecondHealth + action.payload.addHealth,
              playerSecondAction: [
                ...state.players[1].playerSecondAction,
                action.payload.comment
              ],
              id: action.payload.id
            }
          ]
        };
      }
      break;

    case TO_GAME_OVER:
      return initialState;

    default:
      return state;
  }
}