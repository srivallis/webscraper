# webscraper
A web scraping script that automates the process of searching a product on amazon website, collects the results, converts the results in to csv file and sends an email notification to you.

### How to run :
- Clone the repo
- `cd <directory-name>`
- `node app.js --item=<item-you-wish-to-search> --mailId=<your-mailId>`
- eg: `node app.js --item=laptop --mailId=sample@gmail.com`

### Note :
- Check the spam folder for email notification with the subject, `Checkout the prices !`
- Inside the project folder, a csv file, `data.csv` will be auto generated once the script is executed which can be viewed in excel as a spreadsheet. 

### Tech Stack :
- Node js
- Puppeteer
- Sendmail

### How to visually see the script in action ?
- In app.js, modify the puppeteer options, headless to false and set the slowMo to 500.

<img width="499" alt="Screenshot 2021-12-21 at 1 01 33 PM" src="https://user-images.githubusercontent.com/79823203/146889524-57cdbd09-85c1-4be9-a03f-b4d86c6c59d8.png">
