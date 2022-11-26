import React from "react";
import Navigationbar from "../components/Navigationbar";
import RegisterForm from "../components/register/RegisterForm";
function Registerpage() {
    return (
        <div className="px-[70px]">
            <Navigationbar />
            <RegisterForm />
        </div>
    );
}

export default Registerpage;
