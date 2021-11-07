import { setAutoVideo, setAutoGif } from './actions';


const initialState = {
    auto_video: false,
    auto_GIF: false
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case setAutoVideo: {
            return {
                ...state,
                auto_video: !state.auto_video
            }
        }
        case setAutoGif: {
            return {
                ...state,
                auto_GIF: !state.auto_GIF
            }
        }
        default:
            return state
    }
};