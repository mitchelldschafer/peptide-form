export const fetchPeptides = async () => {
  const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSz6C3hYjzWYmIkNM4sS50QJ8OgsWSxHJkIQxRryzVbSopIb18gQ-7u9hchha8tGw1a6H3BlZ4Z5rby/pub?output=csv';
  
  try {
    const response = await fetch(CSV_URL);
    const csvData = await response.text();
    
    // Simple CSV parser that handles basic rows
    const lines = csvData.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',');
    
    const data = lines.slice(1).map(line => {
      const values = line.split(',');
      const obj = {};
      headers.forEach((header, index) => {
        obj[header.trim()] = values[index]?.trim();
      });
      return obj;
    });
    
    return data;
  } catch (error) {
    console.error('Error fetching peptides:', error);
    return [];
  }
};
