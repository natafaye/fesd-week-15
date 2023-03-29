import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// { 
//   method: method, 
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(data)
// }

/* <div className="container mt-3">
  <div className="row mb-3">
    <div className="col">
      <h2>Products</h2>
    </div>
    <div className="col">
      <button className="btn btn-success float-end">Fetch Products</button>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <ul className="list-group">
      </ul>
    </div>
  </div>
</div> */