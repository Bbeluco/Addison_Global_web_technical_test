import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {TitleNamePromo} from './TitleNamePromo';

describe('<TitleNamePromo />', () => {
  it('should render and reflect the text passed as props', () => {
    const text = 'Unit test';
    render(<TitleNamePromo styleChildren={{}} text={text} />);
    expect(screen.queryByText(text)).not.toBeNull();
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
