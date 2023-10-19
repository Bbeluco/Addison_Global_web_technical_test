import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {PromotionAvailable} from './PromotionAvailable';
import {API_RESULT_SUCSESS_MOCK} from '@constants';

describe('<PromotionAvailable />', () => {
  it('UI test', () => {
    render(<PromotionAvailable promotions={API_RESULT_SUCSESS_MOCK} />);

    expect(screen.queryByText(API_RESULT_SUCSESS_MOCK[0].name)).not.toBeNull();
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
