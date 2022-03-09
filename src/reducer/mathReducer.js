import { combineReducers } from "redux";

function mathReducer(state = 0, action) {
    if (action.type === 'ADD') {
        return parseInt(state) + parseInt(action.value);
    }

    return state;
}

function newOwnerReducer(state = 'hunter', action) {
    if (action.type === 'CHANGE_OWNER') {
        return action.newOwner;
    }

    return state;
}

export default combineReducers({
    sum: mathReducer,
    owner: newOwnerReducer,

})

/*
class MathReducerClass {

    state = {sum: 0}

    // {type: ADD, value: input}
    handleReducer(action) {

        mathRducer(this.state, action);

    }


}



*/