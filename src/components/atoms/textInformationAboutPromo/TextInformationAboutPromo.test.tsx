import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {TextInformationAboutPromo} from './TextInformationAboutPromo';

describe('<TextInformationAboutPromo />', () => {
  it('should render and reflect the text passed as props', () => {
    const text = 'Unit test';
    render(<TextInformationAboutPromo styleChildren={{}} text={text} />);
    expect(screen.queryByText(text)).not.toBeNull();
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
