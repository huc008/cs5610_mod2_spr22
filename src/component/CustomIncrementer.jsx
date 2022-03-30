import React from 'react';
import { useDispatch } from 'react-redux';

export default function CustomButton(props) {
    
    const dispatch = useDispatch();

    function increment() {
        const action = {
            type: 'INCREMENT_BY_AMOUNT',
            incrementAmount: props.incrementAmount,
        }

        dispatch(action);

    }

    return (
        <button onClick={increment}>Increment by {props.incrementAmount}</button>
    )

}