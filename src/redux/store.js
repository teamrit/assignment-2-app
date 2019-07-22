import { createStore } from "redux";
import incidents from './reducers/incidents.reducer';
import rootReducer from "./reducers/index";

const defaultState = {
    incidents : {name:"asd"}
};

const store = createStore(
    rootReducer,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
