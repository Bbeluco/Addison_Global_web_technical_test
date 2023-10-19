import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {PromoInfo} from './PromoInfo';

describe('<PromoInfo />', () => {
  it('UI test', () => {
    const titlePromo = 'New promo';
    const descPromo = 'ABC123';
    render(
      <PromoInfo
        styleParent={{}}
        titlePromo={titlePromo}
        descPromo={descPromo}
      />,
    );

    expect(screen.queryByText(titlePromo)).not.toBeNull();
    expect(screen.queryByText(descPromo)).not.toBeNull();
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
