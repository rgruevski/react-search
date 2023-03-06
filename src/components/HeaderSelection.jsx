import React, { useState } from 'react';
import XLSX from 'xlsx';

function HeaderSelection(props) {
  const [headers, setHeaders] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setHeaders(sheetData[0]);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleHeaderChange = (e, index) => {
    const newHeaders = [...headers];
    newHeaders[index] = e.target.value;
    setHeaders(newHeaders);
  };

  const handleHeaderSubmit = () => {
    props.onHeaderSubmit(headers);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <h2>Select headers</h2>
      {headers.map((header, index) => (
        <div key={index}>
          <input
            type="text"
            value={header}
            onChange={(e) => handleHeaderChange(e, index)}
          />
        </div>
      ))}
      <button onClick={handleHeaderSubmit}>Submit</button>
    </div>
  );
}

export default HeaderSelection;