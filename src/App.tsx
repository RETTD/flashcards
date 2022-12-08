import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

// bring Provider from react-redux, it's the bridge for connecting react to redux
import { Provider } from 'react-redux'
// Bring the redux store too
import store from './redux/store'
// Components
import {MainView} from "./components/MainView";
import {AddFlashcard} from "./components/AddFlashcard";
import CheckFlashcard from "./components/CheckFlashcard";

const App = () => {
  return (
      // Register your redux Provider here
      <Provider store={store}>
          <Routes>
              <Route
                     key="flashcards"
                     path="/flashcard"
                     element={<CheckFlashcard />}
              />
              <Route
                     key="create"
                     path="/create"
                     element={<AddFlashcard />}

              />
                <Route
                    key='main'
                    path='/'
                    element={<MainView/>}
                />
          </Routes>
      </Provider>
  )
}
export default App
