import {
    SET_LOADING,
    GET_FLASHCARD,
    SET_ANSWER,
    CREATE_FLASHCARD,
    CLEAR_ANSWER
} from '../actions/action'

// Define your state here
const initialState = {
    loading: false,
    flashcard: {
        english: '',
        polish: '',
        id: 1
    },
    answer: '',
}

export type WordType = {
    english: string, polish: string, id: number,
}

export interface FlashCardState {
    loading: boolean,
    flashcard: WordType,
}

type ActionProps = {
    type: string,
    payload: any,
}

// This export default will control your state for your application
export default(state = initialState, {type, payload}: ActionProps): FlashCardState =>{
    switch(type) {
        // Set loading
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        // Get flashcard
        case GET_FLASHCARD:
            return {
                ...state,
                flashcard: payload,
                loading: false
            }
        // // Create new flashcard
        // case CREATE_FLASHCARD:
        //     return {
        //         ...state,
        //         flashcard: state.flashcard,
        //         loading: false
        //     }

        // Return default state if you didn't match any case
        default:
            return state
    }
}
