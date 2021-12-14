import { Navigate } from "react-router-dom";

const StateRoute = (state, stateExpected, route) => {
    if (state === stateExpected) {
        return <Navigate to={route} />
    }
};

export default StateRoute;