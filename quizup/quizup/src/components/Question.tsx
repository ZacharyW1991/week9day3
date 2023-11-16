import QuestionType from "../types/question";
import Card from 'react-bootstrap/Card'

type QuestionProps={
    question:QuestionType
}

export default function Question({question}: QuestionProps){
    return (
        <Card className="my-3">
            <Card.Body>
                <Card.Title>Question {question.id}</Card.Title>
                <Card.Body>{question.question}</Card.Body>
            </Card.Body>
        </Card>
    )
}