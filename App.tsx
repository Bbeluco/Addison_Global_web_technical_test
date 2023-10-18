import React from 'react';
import {PromotionAvailable} from './src/components/organisms/PromotionAvailable';
import {API_RESULT_SUCSESS_MOCK} from './src/constants';
import {ScrollView, View} from 'react-native';
import {Screens} from './src/screens/Screens';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
}

export default App;
