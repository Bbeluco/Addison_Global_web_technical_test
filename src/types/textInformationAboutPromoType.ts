import {stylesType} from './stylesType';

export interface TextInformationAboutPromoType
  extends Omit<stylesType, 'styleParent'> {
  text: string;
}
