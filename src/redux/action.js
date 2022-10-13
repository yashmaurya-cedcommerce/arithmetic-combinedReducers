import { ADD_NUM, DIV_NUM, MUL_NUM, SUB_NUM } from "./type"

export const addNum=(data)=> {
    return {
        type: ADD_NUM,
        payload: data
    }
}

export const subNum=(data)=> {
    return {
        type: SUB_NUM,
        payload: data
    }
}

export const mulNum=(data)=> {
    return {
        type: MUL_NUM,
        payload: data
    }
}

export const divNum=(data)=> {
    return {
        type: DIV_NUM,
        payload: data
    }
}


