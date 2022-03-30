import { combineReducers } from "redux";

const initialState = {
    sum: 0,
    list: "0",
}

function mathReducer(state = initialState, action) {
   if (action.type === 'ADD') {
       return {
        sum: parseInt(state.sum) + parseInt(action.value),
        list: state.list + " +" + action.value,
       }
       
    } else if (action.type === 'SUBTRACT') {
        return {
            sum: parseInt(state.sum) - parseInt(action.value),
            list: state.list + " -" + action.value,
           }
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
    // owner: newOwnerReducer,

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