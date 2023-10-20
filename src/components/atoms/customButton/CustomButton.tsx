import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {CustomButtonType} from '@customTypes/customButtonType';

export function CustomButton({
  text,
  styleParent,
  styleChildren,
}: CustomButtonType): React.JSX.Element {
  return (
    <TouchableOpacity style={styleParent}>
      <Text style={styleChildren}>{text}</Text>
    </TouchableOpacity>
  );
}
