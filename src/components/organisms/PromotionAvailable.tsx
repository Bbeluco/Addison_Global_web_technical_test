import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PromoImage} from '../atoms/PromoImage';
import {ButtonsRelatedToPromo} from '../molecules/ButtonsRelatedToPromo';
import {PromoInfo} from '../molecules/PromoInfo';

export function PromotionAvailable(): React.JSX.Element {
  return (
    <View style={stylePromotionAvailable.view}>
      <PromoImage styleChildren={stylePromoImage.img} />
      <PromoInfo styleParent={stylePromoInfo.view} />
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
    padding: 10,
  },
});

const stylePromotionAvailable = StyleSheet.create({
  view: {
    backgroundColor: '#e0dcdc',
    margin: 15,
  },
});

const stylePromoInfo = StyleSheet.create({
  view: {
    alignItems: 'center',
  },
});

const stylePromoImage = StyleSheet.create({
  img: {
    width: '100%',
    height: 150,
  },
});
