import {StyleSheet} from 'react-native';

export type stylesType = {
  styleParent: StyleSheet.NamedStyles<any> | StyleSheet.NamedStyles<unknown>;
  styleChildren: StyleSheet.NamedStyles<any> | StyleSheet.NamedStyles<unknown>;
};
