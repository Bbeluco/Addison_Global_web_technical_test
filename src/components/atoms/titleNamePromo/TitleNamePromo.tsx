import React from 'react';
import {Text, View} from 'react-native';
import {DescribePromoType} from '@customTypes/describePromoType';

export function TitleNamePromo({
  text,
  styleChildren,
}: DescribePromoType): React.JSX.Element {
  return (
    <View>
      <Text style={styleChildren}>{text}</Text>
    </View>
  );
}
