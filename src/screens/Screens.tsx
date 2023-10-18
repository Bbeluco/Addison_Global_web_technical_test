import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {PromotionAvailable} from '../components/organisms/PromotionAvailable';
import {API_RESULT_SUCSESS_MOCK} from '../constants';

const Tab = createMaterialTopTabNavigator();

export function Screens(): React.JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="All Promotions"
        children={() => (
          <PromotionAvailable promotions={API_RESULT_SUCSESS_MOCK} />
        )}
      />

      <Tab.Screen
        name="New Customers"
        children={() => (
          <PromotionAvailable
            promotions={API_RESULT_SUCSESS_MOCK.filter(
              promo => promo.onlyNewCustomers === true,
            )}
          />
        )}
      />
    </Tab.Navigator>
  );
}
