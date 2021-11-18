import {createStore, combineReducers  } from "redux";
import {data} from "./components/reducers";

const reducers = {
    data,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);