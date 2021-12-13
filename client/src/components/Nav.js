import React from 'react'; // ES6 js
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="App">
            <Link to='/login' className="nav-item nav-link active">LoginPage</Link>
            <Link to='/register' className="nav-item nav-link active">RegisterPage</Link>
        </div>
    );
}

export default Nav;