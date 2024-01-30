import React from 'react';
import './@assets/css/tailwind.css'
import './@assets/css/index.css'
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import {FirstPage, SecondPage, ThirdPage} from './pages/index';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/second" element={<SecondPage />} />
                <Route path="/third" element={<ThirdPage />} />
            </Routes>
        </Router>
    );
};

export default App;
