import axios from 'axios';

const baseURL = 'https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/'

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

