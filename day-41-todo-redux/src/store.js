import { createStore } from 'redux';

var initialState = {
  inputValue: '',
  items: []
};

const reducer = (state = initialState, action) => {
  // console.log('reducer running check', action);

  switch (action.type) {
    case 'VALUE_CHANGE':
      return Object.assign({}, state, { inputValue: action.value })
    case 'UPDATE_TODO':
      return Object.assign({}, state, { inputValue: '', items: action.items })
    case 'CLEAR_INPUT':
      return Object.assign({}, state, { inputValue: '' })
    default: return state
  }
}

const store = createStore(reducer);

module.exports = {
  store: store
}
