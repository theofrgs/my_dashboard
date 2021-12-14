import Cookies from 'js-cookie'

const Logout = (setStatusLogout) => {
    Cookies.remove('user');
    Cookies.remove('exchanges');
    Cookies.remove('convertCurrency');
    setStatusLogout("logout");
};

export default Logout;