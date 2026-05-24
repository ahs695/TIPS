/**
 * Google Apps Script to handle school inquiry submissions
 * 
 * Instructions:
 * 1. Open Google Sheets (https://sheets.google.com) and create a new spreadsheet.
 * 2. In the first row, add the following headers in columns A through F:
 *    A: Timestamp | B: Parent Name | C: Phone Number | D: Child's Name | E: Class Applying For | F: Message
 * 3. Go to Extensions -> Apps Script.
 * 4. Replace the default code with this script.
 * 5. Click the "Save" icon.
 * 6. Click "Deploy" -> "New deployment".
 * 7. Click the "Select type" gear icon and choose "Web app".
 * 8. Set the configuration:
 *    - Description: TIPS Inquiry Form Handler
 *    - Execute as: Me (your email)
 *    - Who has access: Anyone (this is important, otherwise the website cannot post data here!)
 * 9. Click "Deploy". Authorize permissions if requested.
 * 10. Copy the "Web app" URL (ends with /exec).
 * 11. Paste this URL into the `SCRIPT_URL` variable at the top of your `assets/js/main.js` file!
 */

function doPost(e) {
  try {
    // Parse the JSON payload sent by the frontend
    var data = JSON.parse(e.postData.contents);
    
    // Open the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get the current timestamp
    var timestamp = new Date();
    
    // Append the row of data matching our headers
    sheet.appendRow([
      timestamp, 
      data.parentName, 
      data.phone, 
      data.childName, 
      data.classApply, 
      data.message || "" // Default to empty string if no message
    ]);
    
    // Return a success JSON response
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*'); // Enable CORS header
      
  } catch (error) {
    // Return an error JSON response
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*'); // Enable CORS header
  }
}

// Optional: Handle GET requests just to test if the script is working
function doGet(e) {
  return ContentService.createTextOutput("TIPS Inquiry Form Handler is running successfully!")
    .setMimeType(ContentService.MimeType.TEXT);
}
