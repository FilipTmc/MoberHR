import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* Fontovi su ugrađeni u projekt, ne dolaze s Googleovog CDN-a — stranica ne
   šalje nijedan zahtjev prema vanjskom poslužitelju (GDPR + brzina).
   Latin-ext podskup pokriva č ć ž š đ. */
import '@fontsource/syne/500.css'
import '@fontsource/syne/600.css'
import '@fontsource/syne/700.css'
import '@fontsource/manrope/300.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/pinyon-script/400.css'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
