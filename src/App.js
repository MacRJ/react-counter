import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.data.count}
        <button onClick={this.props.add}>Add</button>
        <button onClick={this.props.subtract}>Subtract</button>
        <button onClick={this.props.double}>Double</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({
      type: "ADD"
    }),
    subtract: () => dispatch({
      type: "SUBTRACT"
    }),
    double: () => dispatch({
      type: "DOUBLE"
    })
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
