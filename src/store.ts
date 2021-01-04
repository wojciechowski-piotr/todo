import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import tasksListReducer from './reducers/tasks';

const store = createStore(tasksListReducer, composeWithDevTools());

export default store;
