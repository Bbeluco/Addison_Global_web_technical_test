import React, {useEffect} from 'react';
import {Screens} from './src/screens/Screens';
import {NavigationContainer} from '@react-navigation/native';
import {usePromotionsHooks} from './src/hooks/usePromotionsHooks';
import {getCurrentPromotions} from './src/utils/requestApiForPromotions';

function App(): React.JSX.Element {
  const {promotionsAvailable, setPromotionsAvailable} = usePromotionsHooks();

  useEffect(() => {
    const requestInfo = async () => {
      return await getCurrentPromotions();
    };
    requestInfo().then(res => setPromotionsAvailable(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>
      <Screens apiResponse={promotionsAvailable} />
    </NavigationContainer>
  );
}

export default App;
