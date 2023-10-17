import React from 'react';
import {View, Text} from 'react-native';
import {TextInformationAboutPromoType} from '../../types/textInformationAboutPromoType';

export function TextInformationAboutPromo({
  text,
  styleChildren,
}: TextInformationAboutPromoType): React.JSX.Element {
  return (
    <View>
      <Text style={styleChildren}>{text}</Text>
    </View>
  );
}
