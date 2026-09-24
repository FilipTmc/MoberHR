import React from 'react'
import ReactDOM from 'react-dom/client'
import AppEn from './AppEn.jsx'

import '@fontsource/syne/500.css'
import '@fontsource/syne/600.css'
import '@fontsource/syne/700.css'
import '@fontsource/manrope/300.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/pinyon-script/400.css'

import '../styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppEn />
  </React.StrictMode>
)
