import Browser from './Browser';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import { load } from 'cheerio';

jest.setTimeout(5000);

describe('Browser -> DocumentHTML', () => {
  let documentHTML: { title: string; HTML: string };
  let path: string;
  let HTML: string;

  beforeAll(async () => {
    path = resolve(__dirname, '..', 'Mocks', 'FlashScoreMocks', 'flashScore.html');
    HTML = await readFileSync(path, 'utf-8');
    documentHTML = await new Browser({ name: 'browser-testing', provider: path }).startBrowser();
  });

  it('should return a HTML and Title equal to expected', async () => {
    const documentElement = await new Browser({ name: 'browser-testing-1', provider: path }).startBrowser();
    expect(documentElement).toEqual({
      title: 'FlashScore',
      HTML: load(HTML)('html').html(),
    });
  });

  it('should return two error', async () => {
    expect.assertions(1);

    try {
      await new Browser({ name: 'browser-testing-error', provider: 'localhost:http' }).startBrowser();
    } catch (err) {
      expect(String(err)).toMatch(/Browser error:/g);
    }
  });
});
