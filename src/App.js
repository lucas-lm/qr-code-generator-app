import './App.css';
import { useState } from "react";
import QRCode from 'qrcode.react';
import svgToImage from 'react-svg-to-image'
import { Button } from './components';

function App() {
  const [value, setValue] = useState('');

  const downloadQRCode = () => {
    svgToImage('svg.qr-code-download', 'qr-code', {
      format: 'png'
    })
  }

  return (
    <div className="App">
      <div className='page-content'>
        <h1>QR Code Generator</h1>
        <textarea 
          value={value} 
          onChange={e => setValue(e.target.value)} 
          className='text-input' 
          placeholder='Digite aqui'
          rows={3}
          autoFocus
        />
        <div className='output'>
          <QRCode 
            value={value} 
            renderAs='svg' 
            size={240} 
            className='qr-code-download'
          />
        </div>
        <div className='action'>
          <Button onClick={downloadQRCode}>
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
