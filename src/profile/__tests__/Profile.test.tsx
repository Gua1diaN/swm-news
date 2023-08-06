// import { render, screen } from '@testing-library/react';
// import { Profile } from '../Profile';

// it('Should render Profile component', async () => {
//     // render(<Profile />);
//     // const articleElement = await screen.findByTestId('whole-article');
//     // expect(articleElement).toBeInTheDocument();

//     // test11122223333 test revert

    // test11122223333 dependabot/npm_and_yarn/got-11.8.6
    ///teatts
    //watrawr
//     // test11122223333 dependabot/npm_and_yarn/got-11.8.6

// });
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import puppeteer from 'puppeteer';
expect.extend({ toMatchImageSnapshot });


it('CreateReactApp home', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
})