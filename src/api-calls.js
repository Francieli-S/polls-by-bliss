import axios from 'axios';

const baseURL = 'https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/';

export const getHealthStatus = async () => {
  try {
    const response = await axios.get(`${baseURL}/health`);
    if (response.status === 200) {
      return response.data.status;
    }
  } catch (error) {
    console.log(error);
  }
};

// to change later
let limit = 10;
let offset = limit;
let filter = '';

export const getQuestions = async () => {
  try {
    const response = await axios.get(
      `${baseURL}/questions?limit=${limit}&offset=${offset}&filter=${filter}`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

//to change later
const question_id = 5;

export const getOneQuestionDetails = async () => {
  try {
    const response = await axios.get(`${baseURL}/questions/${question_id}`);
    if (response.status === 200) {
      console.log('QUESTION ID', question_id);
      console.log('QUESTION DETAIL', response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
