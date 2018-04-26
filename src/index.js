
import { combineReducers, createStore, applyMiddleware } from 'redux';

const setUserReducer = (state = {}, action) => {
  console.log('Users State is', state, 'and action =>', action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        name: action.name,
      };

    default:
      return state;
  }
};
const setNameReducer = (state = {}, action) => {
  console.log('State is', state, 'and action =>', action);

  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
      };

    default:
      return state;
  }
};
const sayHIReducer = (state = {}, action) => {
  console.log('State is', state, 'and action =>', action);

  switch (action.type) {
    case 'SAY':
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};
const sighInReducer = (state = {}, action) => {
  console.log('State is', state, 'and action =>', action);

  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        message: action.name,
      };

    default:
      return state;
  }
};
const thunkMiddleware = function ({ dispatch, getState }) {
  // console.log('Enter thunkMiddleware');
  return function (next) {
    // console.log('Function "next" provided:', next);
    return function (action) {
      // console.log('Handling action:', action);
      return typeof action === 'function' ?
        action(dispatch, getState) :
        next(action);
    };
  };
};
const finalStore = applyMiddleware(thunkMiddleware)(createStore);
const store = finalStore(combineReducers({
  name: setNameReducer,
  hi: sayHIReducer,
  user: setUserReducer,
  signIn: sighInReducer,
}));

const setNameActionCreator = name => ({
  type: 'SET_NAME',
  name,
});


const asyncSayActionCreator = function (message) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({
        type: 'SAY',
        message,
      });
    }, 2000);
  };
};

store.dispatch(setNameActionCreator('vik'));
store.dispatch(asyncSayActionCreator('Hi'));

store.getState();

module.exports = store;
