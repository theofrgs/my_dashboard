import google from '../components/Auth/RegisterGoogle'
import database from '../components/Auth/RegisterDb'

function registerGoogle(setStatusReg) {
    return (google(setStatusReg));
}

function registerDatabase(name, password, setStatusReg) {
    database(name, password, setStatusReg);
}

export {
    registerGoogle,
    registerDatabase
}