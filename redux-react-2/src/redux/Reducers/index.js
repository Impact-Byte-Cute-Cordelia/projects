import { combineReducers } from 'redux'
import getDigimon from './digimon'
import counter from './counterReducers'

const rootReducer = combineReducers({getDigimon, counter})

export default rootReducer