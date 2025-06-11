import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

// This says: "Make the div with the id of root have inside of it whatever the App component returns"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// We are at comicon and functions are cosplaying as HTML
// This: <App/>
// Will get converted to
// This: App()
// NEVER CALL A COMPONENT FUNCTION YOURSELF