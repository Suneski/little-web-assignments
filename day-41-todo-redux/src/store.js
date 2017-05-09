import { createStore } from 'redux';

var initialState = {
  inputValue: '',
  items: []
};

const reducer = (state = initialState, action) => {
  // console.log('reducer running check', action);

  switch (action.type) {
    case 'VALUE_CHANGE':
      return { inputValue: action.value, items: [] }
    case 'UPDATE_TODO':
      return { inputValue: '', items: action.items }
    default: return state
  }
}

const store = createStore(reducer);

module.exports = {
  store: store
}
