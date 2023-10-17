import { useState, useEffect } from 'react';
import { getQuestions } from '../api-calls';
import { Link } from 'react-router-dom';

export default function QuestionsScreen() {
  const [questions, setQuestions] = useState([]);

  // to change later with search option
  let limit = 10;
  let offset = limit;
  let filter = '';

  useEffect(() => {
    const getData = async () => {
      const data = await getQuestions(limit, offset, filter)
      setQuestions(data)
    }
    getData()
  }, []);

  return (
    <div>
      <ol>
        {questions.map((question) => (
          <li key={question.id}>
          <Link to={`/questions/${question.id}`}>{question.question}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
