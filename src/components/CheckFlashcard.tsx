import {GET_FLASHCARDS_REQUESTED} from "../redux/actions/action";
import {useDispatch, useSelector} from "react-redux";
import {useEffect } from "react";
import {FlashCardState} from "../redux/reducers/cards-reducer";
import {SingleFlashcard} from "./SingleFlashcard";

const CheckFlashcard = () => {
    const cards = useSelector((state: { cards: FlashCardState}) => state.cards.flashcards)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: GET_FLASHCARDS_REQUESTED })
    }, [])

    return (
        <div>
            Word {30 - (cards.length + 1)} from 30
            <SingleFlashcard />
        </div>
    )
}

export default CheckFlashcard


