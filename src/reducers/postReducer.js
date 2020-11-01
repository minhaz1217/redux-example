import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
    items: [],
    item: {}
};

export default function (state = initialState, action) {
    console.log("Reducer called");
    switch (action.type) {

        case FETCH_POSTS:
            console.log("FETCH_POSTS called");
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}