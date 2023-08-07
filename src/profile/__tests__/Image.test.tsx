import '@testing-library/jest-dom';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

import { render } from '@testing-library/react';
import { Image } from '../Image';
import { generateImage } from 'jsdom-screenshot';
import puppeteer from 'puppeteer';

jest.setTimeout(60000);
expect.extend({ toMatchImageSnapshot });
test('Should test the visual regression test', async () => {
    const props = {
        "captionText": "Cras mattis consectetur purus sit amet fermentum.",
        "url": "https://images.thewest.com.au/publication/B88945448Z/1536132433649_GKR1Q2DJF.2-1.jpg",
        "index": 0
    }
    render(<Image {...props} />);
    // const screenshot = await generateImage();
    // expect(screenshot).toMatchImageSnapshot();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  await page.goto('https://streamer.com.au');
  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot({
    failureThreshold: 0.005,
  failureThresholdType: 'percent'
  });
})