import {stylesType} from './stylesType';

export interface PromoInfoType extends Omit<stylesType, 'styleParent'> {
  text: string;
}
