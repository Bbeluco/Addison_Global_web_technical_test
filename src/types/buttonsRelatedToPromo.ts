import {stylesType} from './stylesType';

export interface ButtonsRelatedToPromoType
  extends Omit<stylesType, 'styleChildren'> {
  textTermsAndConditionsButtonText: string;
  textJoinNowButtonText: string;
}
