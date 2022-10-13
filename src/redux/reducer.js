import { ADD_NUM, DIV_NUM, MUL_NUM, SUB_NUM } from "./type"

export const initialStateAdd = {
    numOne: null,
    numTwo: null,
    ans: null
}

export const initialStateSub = {
    numOne: null,
    numTwo: null,
    ans: null
}

export const initialStateMul = {
    numOne: null,
    numTwo: null,
    ans: null
}

export const initialStateDiv = {
    numOne: null,
    numTwo: null,
    ans: null
}

export const addReducer = (state = initialStateAdd, action) => {
    switch (action.type) {
        case ADD_NUM:
            return {
                ...state,
                numOne: action.payload.numOne,
                numTwo: action.payload.numTwo,
                ans: parseInt(action.payload.numOne) + parseInt(action.payload.numTwo)
            }
        default:
            return state
    }
}

export const subReducer = (state = initialStateSub, action) => {
    switch (action.type) {
        case SUB_NUM:
            return {
                ...state,
                numOne: action.payload.numOne,
                numTwo: action.payload.numTwo,
                ans: parseInt(action.payload.numOne) - parseInt(action.payload.numTwo)
            }
        default:
            return state
    }
}

export const mulReducer = (state = initialStateMul, action) => {
    switch (action.type) {
        case MUL_NUM:
            return {
                ...state,
                numOne: action.payload.numOne,
                numTwo: action.payload.numTwo,
                ans: parseInt(action.payload.numOne) * parseInt(action.payload.numTwo)
            }
        default:
            return state
    }
}

export const divReducer = (state = initialStateDiv, action) => {
    switch (action.type) {
        case DIV_NUM:
            return {
                ...state,
                numOne: action.payload.numOne,
                numTwo: action.payload.numTwo,
                ans: parseInt(action.payload.numOne) / parseInt(action.payload.numTwo)
            }
        default:
            return state
    }
}



