import React from 'react';
import { useDispatch } from 'react-redux';

export default function CustomButton(props) {
    
    const dispatch = useDispatch();

    function onClick() {
        let type = 'DECREMENT';
        if (props.increment) {
            type = 'INCREMENT';
        }

        const action = {
            type: type,
        }

        dispatch(action);

    }

    const displayName = props.increment ? 'Increment' : 'Decrement';

    return (
        <button onClick={onClick}>{displayName}</button>
    )

}