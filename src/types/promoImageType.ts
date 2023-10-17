import {stylesType} from './stylesType';

export interface PromoImageType extends Omit<stylesType, 'styleParent'> {
  imageLink: string;
}
