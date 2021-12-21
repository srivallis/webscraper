# webscraper
A we scraping script that automates the process of searching a product on amazon and collects the results, converts the results in to csv file and sends an email notification to you.

### How to run :
- Clone the repo
- `cd <directory-name>`
- `node app.js --item=<item-you-wish-to-search> --mailId=<your-mailId>`
- eg: `node app.js --item=laptop --mailId=sample@gmail.com`

### Note :
- Check the spam folder for email notification with the subject, `Checkout the prices !`
- Inside the project folder, a csv file, `data.csv` will be auto generated once the script is executed.

### Tech Stack :
- Node js
- Puppeteer
- Sendmail

### How to visually see the script in action ?
- In app.js, modify the puppeteer options, headless to false and set the slowMo to 500.

