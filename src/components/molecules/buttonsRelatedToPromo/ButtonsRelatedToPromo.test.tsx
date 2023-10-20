import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {ButtonsRelatedToPromo} from './ButtonsRelatedToPromo';

describe('<ButtonsRelatedToPromo />', () => {
  it('UI test', () => {
    const textJoinNowButtonText = 'Join Now';
    const textTermsAndConditionsButtonText = 'Terms & Conditions';
    render(
      <ButtonsRelatedToPromo
        styleParent={{}}
        textJoinNowButtonText={textJoinNowButtonText}
        textTermsAndConditionsButtonText={textTermsAndConditionsButtonText}
      />,
    );

    expect(screen.queryByText(textJoinNowButtonText)).not.toBeNull();
    expect(screen.queryByText(textTermsAndConditionsButtonText)).not.toBeNull();
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
