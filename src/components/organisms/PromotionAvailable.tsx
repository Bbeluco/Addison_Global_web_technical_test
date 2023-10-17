import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonsRelatedToPromo} from '../molecules/ButtonsRelatedToPromo';
import {PromoInfo} from '../molecules/PromoInfo';

export function PromotionAvailable(): React.JSX.Element {
  return (
    <View>
      <PromoInfo />
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
