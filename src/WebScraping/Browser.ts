import pupperter from 'puppeteer';

class Browser {
  constructor(private providerOfData: string) {}

  protected async startBrowser() {
    try {
      const browser = await pupperter.launch();

      const page = await browser.newPage();

      await page.goto(this.providerOfData);

      const documentHTML = await page.evaluate(() => {
        return {
          title: document.title,
          HTML: document.documentElement.innerHTML,
        };
      });

      await browser.close();
      console.log('browser is close');

      return documentHTML;
    } catch (err) {
      throw new Error(`Browser error: ${err}`);
    }
  }
}

export default Browser;
