import React from 'react';
import {View, Text} from 'react-native';
import {PromotionType} from '../../types/api_result';

export function Test(props: PromotionType): React.JSX.Element {
  return (
    <View>
      <Text>{props.description}</Text>
    </View>
  );
}
