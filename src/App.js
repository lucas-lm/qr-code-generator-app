import './App.css';
import { useState } from "react";
import QRCode from 'qrcode.react';
import svgToImage from 'react-svg-to-image';
import DarkModeToggle from 'react-dark-mode-toggle'
import { Button } from './components';

function App() {
  const [value, setValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true)

  const downloadQRCode = () => {
    svgToImage('svg.qr-code-download', 'qr-code', {
      format: 'png'
    })
  }

  return (
    <div className={`App ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <div className='page-content'>
        <div className='dark-mode-container'>
          <DarkModeToggle
            onChange={() => setIsDarkMode(isDark => !isDark)}
            checked={isDarkMode}
            size={64}
          />
          <span>Dark Mode</span>
        </div>
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
