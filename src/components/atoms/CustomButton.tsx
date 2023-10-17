import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type CustomButtonType = {
  text: string;
  styleButton: StyleSheet.NamedStyles<any> | StyleSheet.NamedStyles<unknown>;
  styleTextButton:
    | StyleSheet.NamedStyles<any>
    | StyleSheet.NamedStyles<unknown>;
};

export function CustomButton({
  text,
  styleButton,
  styleTextButton,
}: CustomButtonType): React.JSX.Element {
  return (
    <TouchableOpacity style={styleButton}>
      <Text style={styleTextButton}>{text}</Text>
    </TouchableOpacity>
  );
}
