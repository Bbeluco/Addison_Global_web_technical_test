import React from 'react';
import {View, Text} from 'react-native';
import {PromoInfoType} from '../../types/promoInfoType';

export function TextInformationAboutPromo({
  text,
  styleChildren,
}: PromoInfoType): React.JSX.Element {
  return (
    <View>
      <Text style={styleChildren}>{text}</Text>
    </View>
  );
}
