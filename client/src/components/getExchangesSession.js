import Cookies from 'js-cookie'

function getExchangesSession(setEchanges, setExchangesConnected) {

    const exchangesOldSession = Cookies.get('exchanges_old');
    const exchangesCurrentSession = Cookies.get('exchanges_current');

    const mergeExchanges = (exchangesCurrentSession, exchangesOldSession) => {
        //Obj
        var objCurrentSess = JSON.parse(exchangesCurrentSession);
        var objOldSess = JSON.parse(exchangesOldSession);

        //Date
        var dateOld = Object.keys(objOldSess.data)[0]
        var dateCurrent = Object.keys(objCurrentSess.data)[0]

        //Date data
        var currentData = objCurrentSess.data[dateCurrent];
        var oldData = objOldSess.data[dateOld];

        var rslt = objCurrentSess;

        rslt.data = {}
        rslt.data[dateCurrent] = currentData
        rslt.data[dateOld] = oldData
        return JSON.stringify(rslt)
    }

    if (!exchangesOldSession || !exchangesCurrentSession)
        return
    setEchanges(JSON.parse(mergeExchanges(exchangesOldSession, exchangesCurrentSession)));
    setExchangesConnected(true);
}

export default getExchangesSession;