import {useDispatch} from "react-redux";
import {GET_CREATE_FLASHCARD} from "../redux/actions/action";
import {useState} from "react";

export const AddFlashcard = () => {
    const [eng, setEng] = useState<string>('')
    const [pl, setPl] = useState<string>('')
    const dispatch = useDispatch()

    console.log('word pl/eng', pl, eng)
    return(
        <div>
           <div style={{display:'flex'}}>
               <p>English: </p> <input onChange={(e) => setEng(e.target.value )}/>
           </div>
            <div style={{display:'flex'}}>
                <p>Polish: </p> <input onChange={(e) => setPl(e.target.value) }/>
            </div>
            <button onClick={() => {
                dispatch({
                    type: GET_CREATE_FLASHCARD,
                    payload: {english: eng, polish: pl }
                })
            }}>Add this flashcard</button>
        </div>
    )
}
