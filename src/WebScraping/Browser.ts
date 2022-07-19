import pupperter from 'puppeteer';
import NodeCache from 'node-cache';

type ProviderType = {
  name: string;
  provider: string;
};

const cacheBrowser = new NodeCache({ stdTTL: 1 * 60 * 60 });

class Browser {
  constructor(private providerOfData: ProviderType) {}

  public async startBrowser() {
    try {
      if (cacheBrowser.has(this.providerOfData.name)) {
        return cacheBrowser.get(this.providerOfData.name) as { title: string; HTML: string };
      }

      const browser = await pupperter.launch({
        ignoreDefaultArgs: ['--disable-extensions'],
      });

      const page = await browser.newPage();

      await page.goto(this.providerOfData.provider);

      const documentHTML = await page.evaluate(() => {
        return {
          title: document.title,
          HTML: document.documentElement.innerHTML,
        };
      });

      await browser.close();

      cacheBrowser.set(this.providerOfData.name, documentHTML);

      return documentHTML;
    } catch (err) {
      throw new Error(`Browser error: ${err}`);
    }
  }
}

export default Browser;
