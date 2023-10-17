import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonsRelatedToPromo} from '../molecules/ButtonsRelatedToPromo';

export function PromotionAvailable(): React.JSX.Element {
  return (
    <View>
      <ButtonsRelatedToPromo
        styleParent={styleButtonsRelatedToPromo.parentView}
      />
    </View>
  );
}

const styleButtonsRelatedToPromo = StyleSheet.create({
  parentView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
  },
});
