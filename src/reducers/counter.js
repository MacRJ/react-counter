



const counter = (state = {count:0}, action) => {

let nextState = {count: state.count};

    switch (action.type) {
      case 'ADD':
        nextState.count = state.count + 1
        return nextState;
      case 'SUBTRACT':
        nextState.count = state.count - 1
        return nextState;
      case 'DOUBLE':
        nextState.count = state.count * 2
        return nextState;

      default:
        return state;

    }
}

export default counter
