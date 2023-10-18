import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {PromotionAvailableType} from '../../types/promotionAvailableType';
import {PromoImage} from '../atoms/PromoImage';
import {ButtonsRelatedToPromo} from '../molecules/ButtonsRelatedToPromo';
import {PromoInfo} from '../molecules/PromoInfo';

export function PromotionAvailable({
  promotions,
}: PromotionAvailableType): React.JSX.Element {
  return (
    <ScrollView>
      {promotions.map((promo, index) => {
        return (
          <View
            style={stylePromotionAvailable.view}
            key={Math.random() * index}>
            <PromoImage
              imageLink={promo.heroImageUrl}
              styleChildren={stylePromoImage.img}
            />
            <PromoInfo
              styleParent={stylePromoInfo.view}
              titlePromo={promo.name}
              descPromo={promo.description}
            />
            <ButtonsRelatedToPromo
              styleParent={styleButtonsRelatedToPromo.parentView}
              textTermsAndConditionsButtonText={
                promo.termsAndConditionsButtonText
              }
              textJoinNowButtonText={promo.joinNowButtonText}
            />
          </View>
        );
      })}
    </ScrollView>
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
