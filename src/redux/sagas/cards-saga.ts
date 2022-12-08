// Import the redux-saga/effects
import {
    put,
    call,
    takeEvery, select, takeLatest
} from 'redux-saga/effects'

// Import all actions and api's
import {
    SET_LOADING, GET_SINGLE_FLASHCARD_REQUESTED,
    GET_FLASHCARD, GET_FLASHCARDS_REQUESTED, GET_SINGLE_FLASHCARD, GET_CREATE_FLASHCARD, CREATE_FLASHCARD
} from '../actions/action'

// Import all api's
import {
    CreateFlashcardType,
    createNewFlashcard,
    getListOfFlashcards, getSingleFlashcardQuery
} from '../api/api'

// Here's the unique part, generator function*, function with asterisk(*)
function getID(state: { cards: { flashcards: string[]} }) {
    return state.cards.flashcards[0]
}


// Get Flashcards
function* getListFlashcards(): any {
    yield put({ type: SET_LOADING })

    const flashcardsIDs = yield call(getListOfFlashcards)

    yield put({ type: GET_FLASHCARD, payload: flashcardsIDs })
}

// Get Single Flashcard
function* getSingleFlashcard(): any {
    yield put({ type: SET_LOADING })

    const id: string = yield select(getID)

    const flashcard = yield call(getSingleFlashcardQuery, id)

    yield put({ type: GET_SINGLE_FLASHCARD, payload: flashcard[0] })
}


// Create Flashcard
function* createFlashcard(action: any): any { // check how fix this any with TL
    const newFlashcard = yield call(createNewFlashcard, action.payload)
    yield put({ type: CREATE_FLASHCARD, payload: newFlashcard })
}

export default function* cardsSaga() {
    yield takeEvery(GET_FLASHCARDS_REQUESTED, getListFlashcards)
    yield takeEvery(GET_SINGLE_FLASHCARD_REQUESTED, getSingleFlashcard)
    yield takeLatest(GET_CREATE_FLASHCARD, createFlashcard)

}
