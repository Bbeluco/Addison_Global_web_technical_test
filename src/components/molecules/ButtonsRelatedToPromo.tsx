import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from '../atoms/CustomButton';
import {stylesType} from '../../types/stylesType';

export function ButtonsRelatedToPromo({
  styleParent,
}: Omit<stylesType, 'styleChildren'>): React.JSX.Element {
  return (
    <View style={styleParent}>
      <CustomButton
        text={'Terms & Conditions'}
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
        text={'Join Now'}
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
  },
  text: {
    padding: 5,
    fontWeight: 'bold',
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
