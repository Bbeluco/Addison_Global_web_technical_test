import React from 'react';
import {PromotionAvailable} from './src/components/organisms/PromotionAvailable';
import {API_RESULT_SUCSESS_MOCK} from './src/constants';
import {ScrollView, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <ScrollView>
      {API_RESULT_SUCSESS_MOCK.map((promo, index) => {
        return (
          <View key={index}>
            <PromotionAvailable {...promo} />
          </View>
        );
      })}
    </ScrollView>
  );
}

export default App;
