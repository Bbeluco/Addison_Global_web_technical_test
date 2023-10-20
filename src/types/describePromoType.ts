import {stylesType} from './stylesType';

export interface DescribePromoType extends Omit<stylesType, 'styleParent'> {
  text: string;
}
