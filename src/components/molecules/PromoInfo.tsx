import React from 'react';
import {TextInformationAboutPromo} from '../atoms/TextInformationAboutPromo';
import {StyleSheet, View} from 'react-native';
import {TitleNamePromo} from '../atoms/TitleNamePromo';
import {PromoInfoType} from '../../types/promoInfoType';

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

const styleTextInformationAboutPromo = StyleSheet.create({
  text: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '600',
    padding: 10,
  },
});

const styleTitleNamePromo = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
