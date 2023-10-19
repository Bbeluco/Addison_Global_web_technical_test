import React from 'react';
import {View, Text} from 'react-native';
import {DescribePromoType} from '@customTypes/describePromoType';

export function TextInformationAboutPromo({
  text,
  styleChildren,
}: DescribePromoType): React.JSX.Element {
  return (
    <View>
      <Text style={styleChildren}>{text}</Text>
    </View>
  );
}
