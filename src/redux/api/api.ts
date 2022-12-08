import {database} from "../../firebase/firebaseConfig"
import {query, ref, set, get, orderByChild} from "firebase/database";

export const getListOfFlashcards = async () => {
    try {
        const queryRef = await query(ref(database, 'users/user1/history'), orderByChild('answer_count'))
        const snapshot = await get(queryRef)
        return Object.keys(snapshot.val())
    }
    catch(err) {
        return console.error(err)
    }
}

export const getSingleFlashcardQuery = async (id: string) => {
    try {
        const snapshot = await get(ref(database, 'users/user1/words' + id))
        return Object.values(snapshot.val())
    } catch(err) {
        return console.error(err)
    }
}

export type CreateFlashcardType = {
    english: string,
    polish: string
}
// Create New Flashcard
export const createNewFlashcard = async (payload: CreateFlashcardType) => {
    try {
        const date = Date.now()
        const wordsRef = ref(database, 'users/user1/words/' + date)
        const historyRef =  ref(database, 'users/user1/history/' + date)
        await set(wordsRef, {
                english: payload.english,
                polish: payload.polish,
            }
        )
        await set(historyRef, {
            answer_count: 1,
        })
    } catch(err) {
        return console.error(err)
    }
}
