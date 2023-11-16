import { useState, useEffect } from "react";
import QuestionType from "../types/question";
import Question from "../components/Question";


export default function AllQuestions(){

    const [questions, setQuestions] = useState<QuestionType[]>([]);

    useEffect( () => {
        fetch("https://cae-bookstore.herokuapp.com/question/all")
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <>
            <h2>Questions</h2>
            {questions.map((questions, i)=>(
                <Question key={i} question={questions} />
            ))}
        </>
    )


}