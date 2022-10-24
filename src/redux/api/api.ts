import 'firebase/database';
import {database} from "../../firebase/firebaseConfig"
import {get, ref, set} from "firebase/database";

// Get Next FLashCards
export const getNextFlashcard = async () => {
    try {
        let word
        const snapshot = await get(ref(database, 'words'))
        word = Object.values(snapshot.val())[0]
        return word
    }
    catch(err) {
        return console.error(err)
    }
}

// Create New Flashcard
export const createNewFlashcard = async (word: {english: string, polish: string}) => {
    try {
        await set(ref(database, 'words/' + word.english), {
                english: word.english,
                polish: word.polish,
                box: 1,
                last_update: new (Date.now() as any)
            }
        )
    } catch(err) {
        return console.error(err)
    }
}
