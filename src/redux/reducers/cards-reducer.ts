import {
    SET_LOADING,
    GET_FLASHCARD,
    GET_SINGLE_FLASHCARD,
    CREATE_FLASHCARD,
    REMOVE_FIRST_ELEMENT
} from '../actions/action'

// Define your state here
const initialState: FlashCardState = {
    loading: false,
    flashcards: [''],
    answer: '',
}

export type WordType = {
    english: string, polish: string, id: number,
}

export interface FlashCardState {
    loading: boolean,
    flashcard?: WordType,
    flashcards: string[]
    answer: string
}

 type MyAction = {
    type: string
    payload: string[] | WordType
}

// This export default will control your state for your application
export default(state = initialState, action: MyAction) => {
    switch(action.type) {
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
                flashcards: action.payload,
                loading: false
            }
        // Get single flashcard
        case GET_SINGLE_FLASHCARD:
            return {
                ...state,
                flashcard: action.payload,
                loading: false
            }
        // Create new flashcard
        case CREATE_FLASHCARD:
            return {
                ...state,
                flashcard: state.flashcard,
                loading: false
            }
        case REMOVE_FIRST_ELEMENT:
            // Update the relevant piece of state in the store
            return {
                ...state,
                flashcards: action.payload
            };

        // Return default state if you didn't match any case
        default:
            return state
    }
}
