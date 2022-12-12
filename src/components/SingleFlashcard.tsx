import {CorrectInformation} from "./CorrectInformation";
import {useEffect, useState} from "react";
import {FlashCardState, WordType} from "../redux/reducers/cards-reducer";
import {GET_SINGLE_FLASHCARD_REQUESTED, REMOVE_FIRST_ELEMENT} from "../redux/actions/action";
import {useDispatch, useSelector} from "react-redux";

export const SingleFlashcard = () => {
    const [answer, setAnswer] = useState<string>('')
    const [correct, setCorrect] = useState<boolean | undefined>()
    const card = useSelector((state: { cards: FlashCardState}) => state.cards.flashcard)
    const list = useSelector((state: { cards: FlashCardState}) => state.cards.flashcards)
    const dispatch = useDispatch()


    function checkAnswer() {
        setCorrect(answer === card?.polish)
    }

    function nextCard() {
        // const date = Date.now()

        const updatedArray = list.slice(1);
        dispatch({type: REMOVE_FIRST_ELEMENT, payload: updatedArray })
    }

    useEffect(() => {
        console.log('in effect', list)
        if(list) {
            dispatch({ type: GET_SINGLE_FLASHCARD_REQUESTED })
        }
    }, [list.length])

    console.log('list', card)

    return (
        <div>
            {card &&
                <>
                    <p>English: {card?.english}</p>
                    <div style={{display: 'flex'}}>
                        <p>Answer</p> <input onChange={(e) => setAnswer(e.target.value)}/> <button onClick={checkAnswer}>CHECK!</button>
                    </div>
                </>}
            {correct !== undefined && card && (
                <>
                    <CorrectInformation correct={correct} polish={card?.polish}/>
                    <button onClick={nextCard}>
                        Next card
                    </button>
                </>
            )
            }
        </div>
    )
}
