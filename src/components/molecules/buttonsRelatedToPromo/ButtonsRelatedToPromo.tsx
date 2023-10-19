import React from 'react';
import {View} from 'react-native';
import {CustomButton} from '@components/atoms/customButton/CustomButton';
import {ButtonsRelatedToPromoType} from '@customTypes/buttonsRelatedToPromo';
import {
  stylesCustomButtonDefault,
  stylesTermsAndConditions,
  stylesJoinNow,
} from './styles';

export function ButtonsRelatedToPromo({
  styleParent,
  textJoinNowButtonText,
  textTermsAndConditionsButtonText,
}: ButtonsRelatedToPromoType): React.JSX.Element {
  return (
    <View style={styleParent}>
      <CustomButton
        text={textTermsAndConditionsButtonText}
        styleParent={[
          stylesTermsAndConditions.button,
          stylesCustomButtonDefault.button,
        ]}
        styleChildren={[
          stylesTermsAndConditions.text,
          stylesCustomButtonDefault.text,
        ]}
      />

      <CustomButton
        text={textJoinNowButtonText}
        styleParent={[stylesJoinNow.button, stylesCustomButtonDefault.button]}
        styleChildren={[stylesJoinNow.text, stylesCustomButtonDefault.text]}
      />
    </View>
  );
}
