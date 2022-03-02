import './App.css';
import { useState } from "react";
import QRCode from 'qrcode.react';

function App() {
  const [value, setValue] = useState('https://lucas-lm.github.io');

  return (
    <div className="App">
      <div className='page-content'>
        <h1>QR Code Generator</h1>
        <textarea value={value} onChange={e => setValue(e.target.value)}/>
        <div className='output'>
          <QRCode value={value} renderAs='svg' />
        </div>
        <button>Print</button>
        <button>Download</button>
      </div>
    </div>
  );
}

export default App;
