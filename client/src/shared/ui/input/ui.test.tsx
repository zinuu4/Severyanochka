import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { INPUT_TEST_IDS, Input } from './ui';

// TODO: clean ts-ignore

describe('Input component', () => {
  it('renders correctly', () => {
    render(<Input value="" onChange={() => {}} />);
    const inputElement = screen.getByTestId(INPUT_TEST_IDS.INPUT);
    // @ts-ignore
    expect(inputElement).toBeInTheDocument();
    // @ts-ignore
    expect(inputElement).toHaveValue('');
  });

  it('onChange works correctly', async () => {
    let inputValue = '';
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      inputValue += event.target.value;
    };

    render(<Input value={inputValue} onChange={onChange} />);

    const inputElement = screen.getByTestId(INPUT_TEST_IDS.INPUT);
    await userEvent.type(inputElement, 'React');

    expect(inputValue).toBe('React');
  });
});
