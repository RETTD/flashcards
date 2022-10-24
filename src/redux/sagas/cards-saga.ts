// Import the redux-saga/effects
import {
    put,
    call,
    takeLatest,
    takeEvery
} from 'redux-saga/effects'

// Import all actions and api's
import {
    SET_LOADING,
    CREATE_FLASHCARD,
    GET_FLASHCARD, GET_FLASHCARDS_REQUESTED, CREATE_FLASHCARD_REQUESTED
} from '../actions/action'

// Import all api's
import {
    getNextFlashcard,
    createNewFlashcard,
} from '../api/api'

// Here's the unique part, generator function*, function with asterisk(*)

// Get Flashcards
function* getFlashcard(): any {
    yield put({ type: SET_LOADING })

    const flashcard = yield call(getNextFlashcard)

    yield put({ type: GET_FLASHCARD, payload: flashcard })
}

// Set the title of todo
// function* setTodoTitle({ payload }) {
//     yield put({ type: SET_TODO_TITLE, payload })
// }

// Create Flashcard DOO ZMIANY
// function* createFlashcard({ payload }): any {
//     yield put({ type: SET_LOADING })
//
//     const newFlashcard = yield call(createNewFlashcard, payload)
//
//     yield put({ type: CREATE_FLASHCARD, payload: newFlashcard })
//
//     // Clear todo after creating
//     // yield put({ type: CLEAR_TODO_TITLE })
// }

// Delete todo
// function* deleteTodo({ payload }) {
//     yield put({ type: SET_LOADING })
//
//     const todo = yield call(deleteExistedTodo, payload)
//
//     yield put({ type: DELETE_TODO, payload: todo })
// }

// Export the saga (todo-saga)
export default function* cardsSaga() {
    yield takeEvery(GET_FLASHCARDS_REQUESTED, getFlashcard)
    // yield takeEvery(SET_TODO_TITLE_REQUESTED, setTodoTitle)
    // yield takeLatest(CREATE_FLASHCARD_REQUESTED, createFlashcard)
    // yield takeEvery(DELETE_TODO_REQUESTED, deleteTodo)
}
