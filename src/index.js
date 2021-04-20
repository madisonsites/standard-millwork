import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import reportWebVitals from './reportWebVitals'

const isProduction = process.env.NODE_ENV === 'production'

ReactDOM.unstable_createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

reportWebVitals(isProduction ? console.log : () => {})
