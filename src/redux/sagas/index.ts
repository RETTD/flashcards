import { spawn } from 'redux-saga/effects'

// Sagas
import cardsSaga from './cards-saga'

// Export the root saga
export default function* rootSaga() {
    yield spawn(cardsSaga)
}
