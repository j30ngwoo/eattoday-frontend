import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Result from './page/Result';
import Flicking from './page/Result';
import './index.css';
import Register from './page/Register';
import SelectPreference from 'page/SelectPreference';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={localStorage.getItem('accessToken') ? <SelectPreference /> : <Login />} />
				<Route path="/select" element={<SelectPreference />} />
				<Route path="/login" element={<Login />} />
				<Route path="/result" element={<Result />} />
				<Route path="/register" element={<Register />} />
				<Route path="/flicking" element={<Flicking />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)