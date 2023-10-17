import React from 'react';
import {TextInformationAboutPromo} from '../atoms/TextInformationAboutPromo';
import {StyleSheet, View} from 'react-native';
import {TitleNamePromo} from '../atoms/TitleNamePromo';
import {stylesType} from '../../types/stylesType';

export function PromoInfo({
  styleParent,
}: Omit<stylesType, 'styleChildren'>): React.JSX.Element {
  return (
    <View style={styleParent}>
      <TitleNamePromo text="TITULO" styleChildren={styleTitleNamePromo.text} />
      <TextInformationAboutPromo
        text="Lorem ipsum gigante"
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
  },
});

const styleTitleNamePromo = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
