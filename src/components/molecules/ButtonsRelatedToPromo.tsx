import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from '../atoms/CustomButton';
import {ButtonsRelatedToPromoType} from '../../types/buttonsRelatedToPromo';

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

const stylesCustomButtonDefault = StyleSheet.create({
  button: {
    width: '40%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 12,
  },
});

const stylesTermsAndConditions = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'gray',
  },
  text: {
    color: 'gray',
  },
});

const stylesJoinNow = StyleSheet.create({
  button: {
    backgroundColor: 'gray',
  },
  text: {
    color: 'white',
  },
});
