(async function () {
    const parser = require('minimist');
    const puppeteer = require('puppeteer');
    const exportToCSV = require('export-to-csv').ExportToCsv;
    const generateHtmlTable = require('./generateHtmlTable');
    const sendmail = require('sendmail')({ silent: true });
    const args = process.argv[2] ? parser(process.argv.slice(2)) : '';
    const browser = await puppeteer.launch({
      headless: true,
      slowMo: 0
    });
    const page = await browser.newPage();
    await page.setViewport({width: 1440, height: 1200});
    await page.goto('https://www.amazon.in');
    const arr = [];
    await page.waitForSelector('#twotabsearchtextbox');
    await page.type('#twotabsearchtextbox', args.item);
    await page.waitForSelector('#nav-search-submit-button');
    await page.click('#nav-search-submit-button');
    await page.waitForSelector('[data-component-type="s-search-result"]');
    // await page.waitForNavigation();
    const results = await page.$$('[data-component-type="s-search-result"]');
    for(const result of results) {
      await page.waitForSelector('#nav-search-submit-button');
      const url = 'https://www.amazon.in/' + await result.$eval('.a-link-normal', ele => ele.getAttribute('href'));
      const title = await result.$eval('.a-text-normal', ele => ele.textContent);
      const review = await result.$('span.a-icon-alt') ? await result.$eval('span.a-icon-alt', ele => ele.textContent.split('out')[0]) : 0;
      const price = await result.$eval('.a-price .a-offscreen', ele => ele.textContent);
      arr.push({url: url, title: title, review: review, price: price});
    }

    
    const html = await generateHtmlTable(arr);
    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Amazon search results',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
        // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };
     
    const csvExporter = new exportToCSV(options);
    const fs = require('fs')
    const csvData = csvExporter.generateCsv(arr, true)
    await fs.writeFileSync('data.csv',csvData) 

    await browser.close();
    await sendmail({
      from: 'webscrapper@gmail.com',
      to: args.mailId,
      subject: 'Checkout the prices !',
      html: html
    }, function (err) {
      if (err) console.log(err && err.stack);
    });
})();
