import { useEffect, useState } from 'react';
import { getOneQuestionDetails } from '../api-calls';
import { useParams } from 'react-router';

export default function DetailScreen() {
  const [questionDetails, setQuestionDetails] = useState();
  const { QUESTION_ID } = useParams();
  console.log('QUESTION_ID FROM USER CLICK:', QUESTION_ID);

  useEffect(() => {
    const getData = async () => {
      const data = await getOneQuestionDetails(QUESTION_ID);
      setQuestionDetails(data);
    };
    getData();
  }, [QUESTION_ID]);

  return questionDetails ? (
    <div>
      <img
        src={questionDetails.image_url}
        alt='picture related to question content'
      />
      <h1>Question: {questionDetails.question}</h1>
      <p>Published: {questionDetails.published_at}</p>
      <ul>
        {questionDetails.choices.map((choice) => (
          <li key={choice.choice}>
            {choice.choice} - {choice.votes} votes
            <button type='button'> Vote </button>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>Loading Screen...</div>
  );
}
