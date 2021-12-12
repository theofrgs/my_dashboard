import UserUseEffect from '../components/UserUseEffect';
import UserEffect from '../components/UserEffect';
import exchanges from '../components/getExchangesSession';
import convertCurrency from '../components/getConvertCurrency.js';

function getUserSession(setUser, setLogged) {
    UserUseEffect(setUser, setLogged)
}

function getSession(setStatusLog) {
    UserEffect(setStatusLog)
}

function getExchangesSession(setEchanges, setExchangesConnected) {
    exchanges(setEchanges, setExchangesConnected)
}

function getConvertCurrency(setExchangesSession, setExchangesConnected) {
    convertCurrency(setExchangesSession, setExchangesConnected)
}

export {
    getUserSession,
    getSession,
    getExchangesSession,
    getConvertCurrency
}