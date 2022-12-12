import { spawn, fork } from 'redux-saga/effects'

// Sagas
import cardsSaga, {getSingleFlashcard} from './cards-saga'

// Export the root saga
export default function* rootSaga() {
    yield fork(getSingleFlashcard)
    yield spawn(cardsSaga)
}
