import api from '../../../utils/api';

import * as actionTypes from './actionType';
export const contactUs = (
    password, email,firstName,lastName,
  ) => ({
    type: actionTypes.GET_DETAIL,
    payload: api.post('posts', {
      userId:password,
      id: email,
      title:firstName,
      body:lastName,
    }), 
})
  