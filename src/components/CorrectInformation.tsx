export const CorrectInformation = ({correct, polish}: {correct: boolean | undefined, polish: string}) => {
    if(correct === undefined) return <div/>
    return(
        <div>
            {correct ? 'Correct answer' : `Incorrect answer, correct answer was:`} <b>{polish}</b>
        </div>
    )
}
