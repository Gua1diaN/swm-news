import { render, screen } from '@testing-library/react';
import { Article } from '../Article';

it('Should render Article component', async () => {
    const props = {
        "text": "Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
        "intentions": [],
        "index": 0
    }
    render(<Article {...props} />);
    const articleElement = await screen.findByTestId(/article-item/i);
    expect(articleElement).toBeInTheDocument();
});