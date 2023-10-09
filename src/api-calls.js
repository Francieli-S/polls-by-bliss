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

//to change later - this call always returns question_id: 1
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

// to change later - this call always returns question_id: 1 and it does not really update a db
const body = {}

export const updateQuestion = async () => {
  try {
    const response = await axios.put(`${baseURL}/questions/${question_id}`, body);
    if (response.status === 201) {
      console.log('UPDATE', body);
      console.log('UPDATE', response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

// to change later
let destination_email = 'test@test.com'
let content_url = 'pageURL'

export const shareQuestion = async () => {
  try {
    const response = await axios.post(`${baseURL}/share?destination_email=${destination_email}&content_url=${content_url}`);
    if (response.status === 200) {
      console.log('RESPONSE', response.data.status);
      return response.data.status;
    }
  } catch (error) {
    console.log(error);
  }
};
