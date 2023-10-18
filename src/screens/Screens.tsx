import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {PromotionAvailable} from '../components/organisms/PromotionAvailable';
import {API_RESULT_SUCSESS_MOCK} from '../constants';
import {Test} from '../components/organisms/Test';

const Tab = createMaterialTopTabNavigator();

export function Screens(): React.JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="All Promotions"
        children={() => <Test {...API_RESULT_SUCSESS_MOCK[0]} />}
      />
      {/* <Tab.Screen name="New Customers" component={Test} /> */}
    </Tab.Navigator>
  );
}

// return (
//     <ScrollView>
//       {API_RESULT_SUCSESS_MOCK.map((promo, index) => {
//         return (
//           <View key={index}>
//             <PromotionAvailable {...promo} />
//           </View>
//         );
//       })}
//     </ScrollView>
//   );
