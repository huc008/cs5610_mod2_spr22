import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { shallowEqual, useSelector } from 'react-redux';

// import Box from './Box'

export default function App() {

    const [input, setInput] = useState(0);

    const currentSum = useSelector((state) => {
        // console.log("test")
        // console.log(state)
        return state.sum.sum
    }, shallowEqual);

    const numbers = useSelector((state) => {
        return state.sum.list
    }, shallowEqual);

    const dispatch = useDispatch();

    function handleOnInput(event) {
        setInput(event.target.value);
    }

    function handleOnClick() {
        dispatch({
            type: 'ADD',
            value: input,
        });
    }

    function handleOnClickSubtract() {
        dispatch({
            type: 'SUBTRACT',
            value: input,
        });
    }

    return (<div>
        <h1>{"Let's Have Fun With Redux"}</h1>
        <h2>{"Use the form below to add to the total"}</h2>
        <h3>{currentSum}</h3>
        <input onInput={(event) => handleOnInput(event)}/>
        <button onClick={() => handleOnClick()}>Add</button>
        <button onClick={() => handleOnClickSubtract()}>Subtract</button>
        <h3>{"History List: " + numbers}</h3>
    </div>)
}

// function App() {
    

//     const [kiwiSelected, setKiwiSelected] = useState(true);

//     let isKiwiSelect = "No";
//     if (kiwiSelected) {

//         isKiwiSelect = "Yes"
//     }

//     useEffect(() => console.log("render"), [isKiwiSelect]);


//     return (
//         <div>
//             <div>Is Kiwi Currently Selected?</div>
//             {isKiwiSelect}
//             <Box onKiwiCheck={(kiwiState) => setKiwiSelected(kiwiState)}/>
//         </div>
//     );
// }

// export default App;


// const kiwiFunction = (kiwiState) => setKiwiSelected(kiwiState)