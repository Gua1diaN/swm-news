import { render, screen } from '@testing-library/react';
import { Image } from '../Image';

it('Should render Image component', async () => {
    const props = {
        "captionText": "Cras mattis consectetur purus sit amet fermentum.",
        "url": "https://images.thewest.com.au/publication/B88945448Z/1536132433649_GKR1Q2DJF.2-1.jpg",
        "index": 0
    }
    render(<Image {...props} />);
    const articleElement = await screen.findByTestId(/image-item/i);
    expect(articleElement).toBeInTheDocument();
});