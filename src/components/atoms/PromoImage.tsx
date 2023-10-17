import React from 'react';
import {Image, View} from 'react-native';
import {PromoImageType} from '../../types/promoImageType';

export function PromoImage({
  imageLink,
  styleChildren,
}: PromoImageType): React.JSX.Element {
  return (
    <View>
      <Image style={styleChildren} source={{uri: imageLink}} />
    </View>
  );
}
