import { createStore } from 'redux';


const initialState = {
    recipes: [],
    filters: [],
    recipeQueryValue: '',
    filterQueryValue: '',
    query: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_INPUT':
      return Object.assign({}, state, {recipeQueryValue: action.value });
    case 'SEARCH':
      return Object.assign({}, state, {recipeQueryValue: '', query: state.recipeQueryValue})
    case 'CHANGE_RECIPE_LIST':
      return Object.assign({}, state, {recipes: action.list})
    case 'CHANGE_FILTER_INPUT':
      return Object.assign({}, state, {filterQueryValue: action.value})
    case 'ADD_FILTER':
      const newFilterArray = state.filters.slice();
      newFilterArray.push(state.filterQueryValue);
      return Object.assign({}, state, {filters: newFilterArray, filterQueryValue: '' })
    default: return state;
  }
}

const store = createStore(reducer);

module.exports = store;
