import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (SimpleComponent) => (props) => {
    const isAuth = localStorage.getItem("auth");

    const handleOnLogin = () => {
        localStorage.setItem("auth", "token");
    };

    const handleonLogOut = () => {
        localStorage.removeItem("auth");
    };

    return (
        <CardWrapper>
            {
                <SimpleComponent
                    {...props}
                    isAuth={isAuth}
                    onLogin={handleOnLogin}
                    onLogOut={handleonLogOut}
                />
            }
        </CardWrapper>
    );
};

export default withFunctions;
