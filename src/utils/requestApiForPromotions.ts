// import axios, {AxiosResponse} from 'axios';
import {API_RESULT_SUCSESS_MOCK} from '../constants';
import {ResponseType} from '../types/api_result';

export async function getCurrentPromotions(): Promise<ResponseType> {
  try {
    // This structure is commented bc the API is out
    // const response = await axios.get(
    //   'http://www.mocky.io/v2/5bc3b9cc30000012007586b7',
    // );
    const response: Promise<ResponseType> = new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve(API_RESULT_SUCSESS_MOCK);
      }, 200);
    });
    return await response;
  } catch (e) {
    throw new Error();
  }
}
