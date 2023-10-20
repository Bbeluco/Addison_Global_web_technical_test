import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {API_RESULT_SUCSESS_MOCK} from '@constants';
import {PromoImage} from './PromoImage';

describe('<PromoImage />', () => {
  it('should render and has sorce passed as prop', () => {
    const src = API_RESULT_SUCSESS_MOCK[0].heroImageUrl;
    render(<PromoImage styleChildren={{}} imageLink={src} />);
    const image = screen.getByTestId('promo_image');
    expect(image.props.source).toEqual({uri: src});
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
