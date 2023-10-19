// import axios from 'axios';
import {API_RESULT_SUCSESS_MOCK} from '../constants';
import {ResponseType} from '../types/api_result';

export function getCurrentPromotions(): ResponseType {
  try {
    return API_RESULT_SUCSESS_MOCK;
  } catch (e) {
    throw new Error();
  }
}
