import {stylesType} from './stylesType';

export interface PromoInfoType extends Omit<stylesType, 'styleChildren'> {
  titlePromo: string;
  descPromo: string;
}
