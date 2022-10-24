// Import the redux-saga/effects
import {
    put,
    call,
    takeEvery
} from 'redux-saga/effects'

// Import all actions and api's
import {
    SET_LOADING,
    GET_FLASHCARD, GET_FLASHCARDS_REQUESTED
} from '../actions/action'

// Import all api's
import {
    getNextFlashcard,
} from '../api/api'

// Here's the unique part, generator function*, function with asterisk(*)

// Get Flashcards
function* getFlashcard(): any {
    yield put({ type: SET_LOADING })

    const flashcard = yield call(getNextFlashcard)

    yield put({ type: GET_FLASHCARD, payload: flashcard })
}


// Create Flashcard DOO ZMIANY
// function* createFlashcard({ payload }): any {
//     yield put({ type: SET_LOADING })
//
//     const newFlashcard = yield call(createNewFlashcard, payload)
//
//     yield put({ type: CREATE_FLASHCARD, payload: newFlashcard })
// }

export default function* cardsSaga() {
    yield takeEvery(GET_FLASHCARDS_REQUESTED, getFlashcard)
}
