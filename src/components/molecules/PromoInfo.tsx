import React from 'react';
import {TextInformationAboutPromo} from '../atoms/TextInformationAboutPromo';
import {StyleSheet, View} from 'react-native';
import {TitleNamePromo} from '../atoms/TitleNamePromo';

export function PromoInfo(): React.JSX.Element {
  return (
    <View>
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
