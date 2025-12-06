import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppH5 from './AppH5';

// 检查 URL 参数，如果有 ?h5=true 则使用 H5 版本
const urlParams = new URLSearchParams(window.location.search);
const isH5 = urlParams.get('h5') === 'true';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {isH5 ? <AppH5 /> : <App />}
  </React.StrictMode>
);