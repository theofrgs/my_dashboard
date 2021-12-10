import google from '../components/Auth/LoginGoogle'
import database from '../components/Auth/LoginDb'

function loginGoogle(setStatusLog) {
    return (google(setStatusLog));
}

function LoginDatabase(name, password, setStatusLog) {
    database(name, password, setStatusLog);
}

export {
    loginGoogle,
    LoginDatabase
}