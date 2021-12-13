import './App.css';
import LoginPage from './views/LoginPage/LoginPage'
import DashboardPage from './views/DashboardPage/DashboardPage'
import RegisterPage from './views/RegisterPage/RegisterPage'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='' element={<Navigate to ="/login" />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/dashboard' element={<DashboardPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
