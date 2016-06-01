import fetchJSON from "app/fetchJSON"
import consts from "app/consts"

export const GET = "molotov/topMusic/GET"
export const SET = "molotov/topMusic/SET"
export const ERROR = "molotov/topMusic/ERROR"

const initialState = []

const format = (data) => {

    let result = []

    data = (data.length <= 2) ? data : data.slice(0,3)

    for (var i = 0; i <= data.length - 1; i++) {
        
        result.push(data[i].name)
    };

    return result
}

// redux reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {

    case GET: 
        return []

    case SET:

        return format(action.response.tracks)

    case ERROR:
        /* eslint-disable no-console */
        console.error(ERROR, action.error)
        /* eslint-disable no-console */
        return {
            error: (
                action.error && action.error.data &&
                action.error.data.error && action.error.data.error.user_message
            ) || true
        }

    default:
        return state
    }
}

// redux actions
export function get(id) {
    return {
        types: [
            GET,
            SET,
            ERROR,
        ],
        promise: (
            fetchJSON(consts.api.enpoints.getTopMusics(id), {
                method: "GET"
            })
        )
    }
}
