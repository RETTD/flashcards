import {CorrectInformation} from "./CorrectInformation";
import {useEffect, useState} from "react";
import {FlashCardState} from "../redux/reducers/cards-reducer";
import {ref, remove, set} from "firebase/database";
import {database} from "../firebase/firebaseConfig";
import {useNavigate} from "react-router-dom";
import {GET_SINGLE_FLASHCARD_REQUESTED} from "../redux/actions/action";
import {useDispatch, useSelector} from "react-redux";

export const SingleFlashcard = () => {
    const [answer, setAnswer] = useState<string>('')
    const [correct, setCorrect] = useState<boolean | undefined>()
    const card = useSelector((state: { cards: FlashCardState}) => state.cards.flashcard)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    console.log('card word', card)

    function checkAnswer() {
        setCorrect(answer === card.polish)
    }

    function nextCard() {
        const date = Date.now()

        const object = {
            ...card,
            id: date
        }
        const forDeleteRef = ref(database, 'words' + `/${card.id}`)
        remove(forDeleteRef).then(() => set(ref(database, 'words' + `/${date.toString()}`), object))

        setTimeout(()=> {
            navigate(0)
        }, 500)
    }

    useEffect(() => {
        dispatch({ type: GET_SINGLE_FLASHCARD_REQUESTED })
    }, [])

    return (
        <div>
            {card &&
                <>
                    <p>English: {card.english}</p>
                    <div style={{display: 'flex'}}>
                        <p>Answer</p> <input onChange={(e) => setAnswer(e.target.value)}/> <button onClick={checkAnswer}>CHECK!</button>
                    </div>
                </>}
            {correct !== undefined && (
                <>
                    <CorrectInformation correct={correct} polish={card.polish}/>
                    <button onClick={nextCard}>
                        Next card
                    </button>
                </>
            )
            }
        </div>
    )
}
