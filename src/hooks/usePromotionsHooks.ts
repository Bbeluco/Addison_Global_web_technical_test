import {useState} from 'react';
import {ResponseType} from '@customTypes/api_result';

export function usePromotionsHooks() {
  const [promotionsAvailable, setPromotionsAvailable] = useState<ResponseType>(
    [],
  );

  return {promotionsAvailable, setPromotionsAvailable};
}
