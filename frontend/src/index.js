import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(<React.StrictMode>
	<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
	<Router>
		<App/>
	</Router>
	</GoogleOAuthProvider>
</React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
