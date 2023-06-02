import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

it('Should render Header component', async () => {
    const newsContent = {
        headline: "headkline",
        source: "source",
        byline: "byline",
        publicationDate: "2020-09-01T01:00:00.000Z",
        blocks: []
    }
    render(<Header newsContent={newsContent} />);
    const articleElement = await screen.findByTestId('test-header');
    expect(articleElement).toBeInTheDocument();
});