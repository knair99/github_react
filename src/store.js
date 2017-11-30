import { createStore } from 'redux';
import fetchReducer from 'reducers';

export default (initialState) => {
    return createStore(fetchReducer, initialState);
}