import LogoutGoogle from "./LogoutGoogle";
import LogoutDb from "./LogoutDb";

const Logout = (user, setStatusLogout) => {
    if (user.usergoogleid !== null)
        LogoutGoogle(setStatusLogout);
    else {
        LogoutDb(setStatusLogout);
    }
};

export default Logout;