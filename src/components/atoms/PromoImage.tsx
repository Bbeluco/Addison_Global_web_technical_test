import React from 'react';
import {Image, View} from 'react-native';
import {stylesType} from '../../types/stylesType';

export function PromoImage({
  styleChildren,
}: Omit<stylesType, 'styleParent'>): React.JSX.Element {
  return (
    <View>
      <Image
        style={styleChildren}
        source={{uri: 'https://via.placeholder.com/600x300'}}
      />
    </View>
  );
}
