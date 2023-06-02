import { render, screen } from '@testing-library/react';
import { Quote } from '../Quote';

it('Should render Profile component', async () => {
    render(<Quote text='test' attribution='attribution' index={0} />);
    const articleElement = await screen.findByTestId(/quote-item/i);
    expect(articleElement).toBeInTheDocument();
});