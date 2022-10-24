import PropTypes from "prop-types";
import {GET_FLASHCARDS_REQUESTED} from "../redux/actions/action";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {CorrectInformation} from "./CorrectInformation";
import {ref, set, remove} from "firebase/database";
import {database} from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import {FlashCardState} from "../redux/reducers/cards-reducer";


interface SingleFlashcardProps {
    getFlashcard: () => void,
    word: FlashCardState
}

const SingleFlashcard = ({word, getFlashcard}: SingleFlashcardProps) => {
    const [answer, setAnswer] = useState<string>('')
    const [correct, setCorrect] = useState<boolean | undefined>()
    const navigate = useNavigate();


    function checkAnswer() {
        if (answer === word.flashcard.polish) {
            setCorrect(true)
        } else {
            setCorrect(false)
        }
    }

    function nextCard() {
            const date = Date.now()
            const object = {
                ...word.flashcard,
                id: date
            }
            const forDeleteRef = ref(database, 'words' + `/${word.flashcard.id}`)
            remove(forDeleteRef).then(() => set(ref(database, 'words' + `/${date}`), object))

            navigate(0)
    }

    useEffect(() => {
        getFlashcard()
       // eslint-disable-next-line

    }, [])


    return (
        <div>
            {word &&
                <>
            <p>English: {word.flashcard.english}</p>
            <div style={{display: 'flex'}}>
                <p>Answer</p> <input onChange={(e) => setAnswer(e.target.value)}/> <button onClick={checkAnswer}>CHECK!</button>
            </div>
                </>}
            <CorrectInformation correct={correct} polish={word.flashcard.polish} />
            {correct !== undefined && (
                <>
                    <button onClick={nextCard}>
                        Next card
                    </button>
                </>
            )

            }
        </div>
    )
}

SingleFlashcard.propTypes = {
    loading: PropTypes.bool,
    english: PropTypes.string,
    getFlashcard: PropTypes.func.isRequired,
}


// Get state to props
const mapStateToProps = (state: { cards: FlashCardState }) => ({
        word: state.cards
})

// Get dispatch / function to props
const mapDispatchToProps = (dispatch: any) => ({
    getFlashcard: () => dispatch({ type: GET_FLASHCARDS_REQUESTED })
})


// To make those two function works register it using connect
export default connect(mapStateToProps, mapDispatchToProps)(SingleFlashcard)
