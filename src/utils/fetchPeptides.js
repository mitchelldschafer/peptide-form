export const fetchPeptides = async () => {
  const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSz6C3hYjzWYmIkNM4sS50QJ8OgsWSxHJkIQxRryzVbSopIb18gQ-7u9hchha8tGw1a6H3BlZ4Z5rby/pub?output=csv';
  
  try {
    const response = await fetch(`${CSV_URL}${CSV_URL.includes('?') ? '&' : '?'}t=${Date.now()}`, {
      cache: 'no-store'
    });
    const csvData = await response.text();
    
    // Robust CSV parser that handles quoted fields (like "$1,600")
    const parseCSVLine = (line) => {
      const values = [];
      let currentField = '';
      let insideQuotes = false;
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          insideQuotes = !insideQuotes;
        } else if (char === ',' && !insideQuotes) {
          values.push(currentField.trim().replace(/^"|"$/g, ''));
          currentField = '';
        } else {
          currentField += char;
        }
      }
      values.push(currentField.trim().replace(/^"|"$/g, ''));
      return values;
    };

    const lines = csvData.split('\n').filter(line => line.trim() !== '');
    const headers = parseCSVLine(lines[0]);
    
    const data = lines.slice(1).map(line => {
      const values = parseCSVLine(line);
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = values[index];
      });
      return obj;
    });
    
    return data;
  } catch (error) {
    console.error('Error fetching peptides:', error);
    return [];
  }
};
