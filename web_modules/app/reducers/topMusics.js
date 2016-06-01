import fetchJSON from "app/fetchJSON"
import consts from "app/consts"

export const GET = "molotov/topMusic/GET"
export const SET = "molotov/topMusic/SET"
export const ERROR = "molotov/topMusic/ERROR"

const initialState = []

const format = (data) => {

    let result = []

    console.log( data )

    data = (data.length <= 5) ? data : data.slice(0,5)

    for (var i = 0; i <= data.length - 1; i++) {

        var minutes = Math.floor(data[i].duration_ms / 60000);
        var seconds = ((data[i].duration_ms % 60000) / 1000).toFixed(0);

        data[i].duration_ms = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;

        result.push({ "name": data[i].name, "preview": data[i].preview_url, "duration": data[i].duration_ms, "uri": data[i].external_urls.spotify })
    };

    console.log( result )

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
