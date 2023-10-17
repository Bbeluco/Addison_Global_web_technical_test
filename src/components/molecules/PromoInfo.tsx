import React from 'react';
import {TextInformationAboutPromo} from '../atoms/TextInformationAboutPromo';
import {StyleSheet, View} from 'react-native';

export function PromoInfo(): React.JSX.Element {
  return (
    <View>
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
