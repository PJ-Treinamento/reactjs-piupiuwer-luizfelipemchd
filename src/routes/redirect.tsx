import React from "react";
import { Redirect } from "react-router";

const Redirection: React.FC = () => {
    return(
        <Redirect to={{
            pathname: "/login",
        }}
        />
    );
}

export default Redirection;