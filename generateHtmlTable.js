/**
 * @description constructs a html table for visualization
 * @param {object[]} data- array of objects
 * @return - html table
 */
module.exports = function (data) {
  /**
   * @description constructs a row for a table
   * @param {object} item - object to be modified in to a row
   * @return - html row element
   */
  const constructRow = (item) => {
    return `
    <tr style="text-align: center; border-bottom: 1px solid;">
      <td style="padding: 15px;"><a href=${item.url}>Click Here</a></td>
      <td style="padding: 15px; border-right: 1px solid;">${item.title}</td>
      <td style="padding: 15px; border-right: 1px solid;">${item.review}</td>
      <td style="padding: 15px; border-right: 1px solid;">${item.price}</td>
    </tr>`;
  };

  /**
   * @description constructs a table of rows
   * @param {array} rows - rows to be added to the table
   * @return - html table element
   */
  const constructTable = (rows) => {
    return `
    <table style="border: 1px solid; border-collapse: collapse;">
      <tr style="text-align: center; border-bottom: 1px solid;">
        <th style="background: #ccc; padding: 15px; border-right: 1px solid;">Url</td>
        <th style="background: #ccc; padding: 15px; border-right: 1px solid;">Title</td>
        <th style="background: #ccc; padding: 15px; border-right: 1px solid;">Review</td>
        <th style="background: #ccc; padding: 15px; border-right: 1px solid;">Price</td>
      </tr>
      ${rows}
    </table>`;
  };

  const constructHtml = (table) => {
    return `
    <html>
      <head>
      </head>
      <body>
        ${table}
      </body>
    </html>`;
  };

  const rows = data.map(constructRow).join('');
  const table = constructTable(rows);
  return constructHtml(table);
};
