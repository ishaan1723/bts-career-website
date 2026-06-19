/**
 * Fetches and parses a public Google Sheet tab as JSON.
 * The Google Sheet must be shared as "Anyone with the link can view".
 * 
 * @param {string} sheetId - The ID of the Google Sheet (from the URL).
 * @param {string} tabName - The name of the tab/sheet (e.g., "Stats", "Testimonials").
 * @returns {Promise<Array<Object>>} - Array of objects where keys are the column header names.
 */
export async function fetchGoogleSheetData(sheetId, tabName) {
  try {
    if (!sheetId || sheetId === "YOUR_GOOGLE_SHEET_ID_HERE") {
      return [];
    }

    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tabName)}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    
    // Google Sheets returns JSON wrapped in: google.visualization.Query.setResponse(...)
    const startIdx = text.indexOf("({");
    const endIdx = text.lastIndexOf("})");
    
    if (startIdx === -1 || endIdx === -1) {
      throw new Error("Invalid JSON structure returned from Google Sheets");
    }
    
    const jsonString = text.substring(startIdx + 1, endIdx + 1);
    const data = JSON.parse(jsonString);
    
    // Get column labels/headers
    const cols = data.table.cols.map(col => col.label || col.id);
    
    // Map rows to objects using header names as keys
    const rows = data.table.rows.map(row => {
      const rowData = {};
      row.c.forEach((cell, index) => {
        const colName = cols[index];
        if (colName) {
          // Store cell value (using lowercase key for convenience)
          const key = colName.trim().toLowerCase().replace(/\s+/g, "_");
          rowData[key] = cell ? cell.v : "";
        }
      });
      return rowData;
    });
    
    return rows;
  } catch (error) {
    console.error(`Error fetching Google Sheet tab "${tabName}":`, error);
    return [];
  }
}
