import axios from 'axios';

export const getUser = hp => {
  const phone_number = hp || '';
  return {
    type: 'GET_USER',
    payload: axios({
      method: 'GET',
      url: `http://192.168.1.39:8282/v1/user/?hp=${phone_number}`,
    }),
  };
};
 