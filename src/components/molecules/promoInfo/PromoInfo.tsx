import React from 'react';
import {TextInformationAboutPromo} from '@components/atoms/textInformationAboutPromo/TextInformationAboutPromo';
import {View} from 'react-native';
import {TitleNamePromo} from '@components/atoms/titleNamePromo/TitleNamePromo';
import {PromoInfoType} from '@customTypes/promoInfoType';
import {styleTextInformationAboutPromo, styleTitleNamePromo} from './styles';

export function PromoInfo({
  styleParent,
  titlePromo,
  descPromo,
}: PromoInfoType): React.JSX.Element {
  return (
    <View style={styleParent}>
      <TitleNamePromo
        text={titlePromo}
        styleChildren={styleTitleNamePromo.text}
      />
      <TextInformationAboutPromo
        text={descPromo}
        styleChildren={styleTextInformationAboutPromo.text}
      />
    </View>
  );
}
