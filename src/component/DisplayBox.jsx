import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import './DisplayBox.css';
import DisplayDisplayBox from './DisplayDisplayBox';

export default function DisplayBox(props) {


    function getNumberFromState(state) {
        console.log("i was useSelected!")
        return state[props.displayInstance];
    }


    // const banana = {}
    // banana === banana
    // shallow = '==='
    const currentCount = useSelector(getNumberFromState, shallowEqual)
    //function useSelect(selectorFunc, compFunc) {
    //   selectorFunc(redux.state)
    //
    // }


    console.log("I did rerender " + props.displayInstance + '' + currentCount)


    return (
        <h1 className='displayBox'>
            {currentCount}
        </h1>
    )
}


// return (

//     <Cell placement={'placement1'} />
//     <Cell placement={2} />
//     <Cell />
//     <Cell />
// )

// state = {
//     placement1: true,
//     placement2: true,  
//     //...
//     count: 0,
// }