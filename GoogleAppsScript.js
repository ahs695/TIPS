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
