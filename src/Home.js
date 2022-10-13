import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNum, divNum, mulNum, subNum } from './redux/action';

export default function Home() {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [sign, setSign] = useState('+');
    const [numOne, setNumOne] = useState();
    const [numTwo, setNumTwo] = useState();
    const [hideFlag, setHideFlag] = useState(false)

    var signSelectHandler = (event) => {
        setSign(event.currentTarget.value);
    }
    var numOneChange = (event) => {
        setNumOne(event.currentTarget.value);
    }
    var numTwoChange = (event) => {
        setNumTwo(event.currentTarget.value);
    }

    var calculateHandler = (event) => {
        setHideFlag(false)
        switch (sign) {
            case "+":
                dispatch(addNum({ numOne: numOne, numTwo: numTwo }))
                break;
            case "-":
                dispatch(subNum({ numOne: numOne, numTwo: numTwo }))
                break;
            case "*":
                dispatch(mulNum({ numOne: numOne, numTwo: numTwo }))
                break;
            case "/":
                dispatch(divNum({ numOne: numOne, numTwo: numTwo }))
                break;
            default:
                alert()
        }
    }

    

    var renderAnswer = useMemo(() => {

        switch (sign) {
            case "+":
                return <input type="number" id='answerInput' value={state.addition.ans} readOnly />

            case "-":
                return <input type="number" id='answerInput' value={state.subtract.ans} readOnly />

            case "*":
                return <input type="number" id='answerInput' value={state.multiply.ans} readOnly />

            case "/":
                return <input type="number" id='answerInput' value={state.divide.ans} readOnly />

            default:
                return <input type="number" id='answerInput' readOnly />
        }

    },[state, sign])

    var clearHandler=()=> {
        setNumOne('')
        setNumTwo('')
        setSign('+')
        setHideFlag(true)
    }



    return (
        <div className='homeContainer'>
            <select id='operationSelect' onChange={(event) => signSelectHandler(event)} value={sign}>
                <option value="+">ADD</option>
                <option value="-">SUB</option>
                <option value="*">MUL</option>
                <option value="/">DIV</option>
            </select>
            <div className='upperFlex'>
                <input type="number" id='numOneInput' onChange={(event) => numOneChange(event)} value={numOne} />
                <input type="text" id='operationInput' value={sign} readOnly />
                <input type="number" id='numTwoInput' onChange={(event) => numTwoChange(event)} value={numTwo} />
                <input type="text" id="equalsInput" value="=" readOnly />

                {(hideFlag === false)?renderAnswer:<input type="number" id='answerInput' value="" readOnly />}
            </div>
            <div className='btnDiv'>
                <button className='calculateBtn' onClick={(event) => calculateHandler(event)}>Calculate</button>
                <button className='clearBtn' onClick={()=>clearHandler()}>Clear</button>
            </div>
        </div>
    )
}
