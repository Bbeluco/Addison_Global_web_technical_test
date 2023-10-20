import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {CustomButton} from './CustomButton';

describe('<CustomButton />', () => {
  it('should render and reflect the text passed as props', () => {
    const text = 'Unit test';
    render(<CustomButton styleChildren={{}} styleParent={{}} text={text} />);
    expect(screen.queryByText(text)).not.toBeNull();
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
