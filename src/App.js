import './App.css';
import { useState } from "react";
import QRCode from 'qrcode.react';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <div className='page-content'>
        <h1>QR Code Generator</h1>
        <textarea 
          value={value} 
          onChange={e => setValue(e.target.value)} 
          className='text-input' 
          placeholder='Digite aqui'
          rows={7}
        />
        <div className='output'>
          <QRCode value={value} renderAs='svg' size={240}/>
        </div>
        <div className='action'>
          <button>Print</button>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
}

export default App;
