import React from 'react';
import {ScrollView, View} from 'react-native';
import {PromotionAvailableType} from '@customTypes/promotionAvailableType';
import {PromoImage} from '@components/atoms/promoImage/PromoImage';
import {ButtonsRelatedToPromo} from '@components/molecules/buttonsRelatedToPromo/ButtonsRelatedToPromo';
import {PromoInfo} from '@components/molecules/promoInfo/PromoInfo';
import {
  styleButtonsRelatedToPromo,
  stylePromotionAvailable,
  stylePromoInfo,
  stylePromoImage,
} from './styles';

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
