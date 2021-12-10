import React from 'react'; // ES6 js
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="App">
            <Link to='/' className="nav-item nav-link active">Home</Link>
            <Link to='/register' className="nav-item nav-link active">RegisterPage</Link>
            <Link to='/login' className="nav-item nav-link active">LoginPage</Link>
        </div>
    );
}

export default Nav;