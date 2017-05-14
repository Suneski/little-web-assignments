import { createStore } from 'redux';

import blackbelt from './images/blackbelt.gif';
import blackmage from './images/blackmage.gif';
import fighter from './images/fighter.gif';
import redmage from './images/redmage.gif';
import thief from './images/thief.gif';
import whitemage from './images/whitemage.gif';

var constants = {
  BLACKBELT: 'BLACKBELT',
  BLACKMAGE: 'BLACKMAGE',
  FIGHTER: 'FIGHTER',
  REDMAGE: 'REDMAGE',
  THIEF: 'THIEF',
  WHITEMAGE: 'WHITEMAGE',
  NAME_PLUS_THE: 'NAME_PLUS_THE',
}

const BLACKBELT = { type: constants.BLACKBELT};
const BLACKMAGE = { type: constants.BLACKMAGE};
const FIGHTER = { type: constants.FIGHTER};
const REDMAGE = { type: constants.REDMAGE};
const THIEF = { type: constants.THIEF};
const WHITEMAGE = { type: constants.WHITEMAGE};

const initialState = {
  value: fighter,
  jobClass: 'Fighter',
  src: fighter,
  stats: {
    hp: 35,
    str: 20,
    agi: 5,
    int: 1,
    vit: 10,
    lck: 5,
  }
}

const characterReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.BLACKBELT:
      return {
        jobClass: "Black Belt",
        src: blackbelt,
        stats: {
          hp: 33,
          str: 5,
          agi: 5,
          int: 5,
          vit: 20,
          lck: 5,
        }
      }
    case constants.BLACKMAGE:
      return {
        jobClass: "Black Mage",
        src: blackmage,
        stats: {
          hp: 25,
          str: 1,
          agi: 10,
          int: 20,
          vit: 1,
          lck: 10,
        }
      }
    case constants.FIGHTER:
      return {
        jobClass: 'Fighter',
        src: fighter,
        stats: {
          hp: 35,
          str: 20,
          agi: 5,
          int: 1,
          vit: 10,
          lck: 5,
        }
      }
    case constants.REDMAGE:
      return {
        jobClass: "Red Mage",
        src: redmage,
        stats: {
          hp: 30,
          str: 10,
          agi: 10,
          int: 10,
          vit: 5,
          lck: 5,
        }
      }
    case constants.THIEF:
      return {
        jobClass: "Thief",
        src: thief,
        stats: {
          hp: 30,
          str: 5,
          agi: 10,
          int: 5,
          vit: 5,
          lck: 15
        }
      }
    case constants.WHITEMAGE:
      return {
        jobClass: "White Mage",
        src: whitemage,
        stats: {
          hp: 28,
          str: 5,
          agi: 5,
          int: 15,
          vit: 10,
          lck: 5,
        }
      }
    default: return state;
  }
};

var store = createStore(characterReducer);

module.exports = {
  store: store,
  actions: {
    BLACKBELT: BLACKBELT,
    BLACKMAGE: BLACKMAGE,
    FIGHTER: FIGHTER,
    REDMAGE: REDMAGE,
    THIEF: THIEF,
    WHITEMAGE: WHITEMAGE,
  }
};
