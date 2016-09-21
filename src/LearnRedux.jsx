import React, { Component, PropTypes } from 'react';

const DO_IT = 'Do what you love to do';
export const actionCreator = (doing = 'Learn redux.')=> {
  return {
    type: DO_IT,
    payload: doing,
  };
};

export const reducer = (state = {}, action)=> {
  switch (action.type) {
    case DO_IT:
      return {
        ...state,
        doWhat: action.payload,
      };
    default:
      return state;
  }
};

class LearnRedux extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    const store = this.props.store;
    const text = store.getState().doWhat;
    const learnClick = ()=> store.dispatch(actionCreator());
    const loveClick = ()=> store.dispatch(actionCreator('Love vivijin!'));
    return (
      <div className="learn-redux">
        <div>What you love to do?</div>
        <div>answer: {text}</div>
        <div>
          <button onClick={learnClick}>
            learn
          </button>
          <button onClick={loveClick}>
            love
          </button>
        </div>
      </div>
    );
  }

}

export default LearnRedux;
