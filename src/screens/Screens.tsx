import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {PromotionAvailable} from '@components/organisms/promotionAvailable/PromotionAvailable';
import {ResponseType} from '@customTypes/api_result';

const Tab = createMaterialTopTabNavigator();

type ScreensType = {
  apiResponse: ResponseType;
};

export function Screens({apiResponse}: ScreensType): React.JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="All Promotions"
        children={() => <PromotionAvailable promotions={apiResponse} />}
      />

      <Tab.Screen
        name="New Customers"
        children={() => (
          <PromotionAvailable
            promotions={apiResponse.filter(
              promo => promo.onlyNewCustomers === true,
            )}
          />
        )}
      />
    </Tab.Navigator>
  );
}
