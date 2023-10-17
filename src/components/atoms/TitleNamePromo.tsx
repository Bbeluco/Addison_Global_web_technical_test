import React from 'react';
import {Text, View} from 'react-native';
import {PromoInfoType} from '../../types/promoInfoType';

export function TitleNamePromo({
  text,
  styleChildren,
}: PromoInfoType): React.JSX.Element {
  return (
    <View>
      <Text style={styleChildren}>{text}</Text>
    </View>
  );
}
