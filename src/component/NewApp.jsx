import React, {useState} from 'react';
import { useParams } from 'react-router';
import CustomButton from './CustomButton';
import CustomIncrementer from './CustomIncrementer'

import DisplayBox from './DisplayBox';

export default function NewApp(props) {
    const pathParams = useParams();

    /* {
        difficulty: easy/medium/hard
    }
    */
    const difficulty = pathParams.difficulty;
    // const [numberState, setNumberState] = useState(0);

    // let count = 0;

    // function countClicker() {
    //     count = count + 1;
    //     console.log(count);
    //     setNumberState(numberState + 1);
    // }

    return (
        <div>
            <h1>This game is {difficulty}</h1>
            <DisplayBox displayInstance={'first'}></DisplayBox>
            <DisplayBox displayInstance={'second'}></DisplayBox>
            <CustomButton increment={true} />
            <CustomButton increment={false} />
            <CustomIncrementer incrementAmount={4} />
        </div>
    );
}