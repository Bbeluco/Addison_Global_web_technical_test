import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from '../atoms/CustomButton';

export function ButtonsRelatedToPromo(): React.JSX.Element {
  return (
    <View>
      <CustomButton
        text={'Terms & Conditions'}
        styleButton={stylesTermsAndConditions.button}
        styleTextButton={stylesTermsAndConditions.text}
      />
    </View>
  );
}

const stylesTermsAndConditions = StyleSheet.create({
  button: {
    width: '40%',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'gray',
    padding: 5,
    fontWeight: 'bold',
  },
});
