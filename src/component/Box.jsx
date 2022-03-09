import React, { useState } from 'react';

import './Box.css';

/*
props:
    {
        text: 'banana'

    }
*/

export default function Box(props) {

    const fruitList = ["kiwi", "banana", "apple", "orange"]

    const [fruit, setFruit] = useState('kiwi')
    
    let className = "box";
    if (fruit === 'kiwi') {
        className += " " + 'aqua';
    } else if (fruit === 'banana') {
        className += " " + "yellow";
    }

    function randomFruitSelector() {
        const randomIdx = Math.floor(Math.random() * fruitList.length);

        const selectedFruit = fruitList[randomIdx];

        setFruit(selectedFruit);

        // (kiwiState) => setKiwiSelected(kiwiState)
        if (selectedFruit == 'kiwi') {
            props.onKiwiCheck(true);
        } else {
            props.onKiwiCheck(false);
        }
    }

    return (<div className={className}>
        {fruit}
        <button onClick={() => randomFruitSelector()}>Random fruit selector</button>
    </div>);
}