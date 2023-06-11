import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Result from './Result';
import Flicking from './Flicking';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/result" element={<Result />} />
				<Route path="/flicking" element={<Flicking />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)