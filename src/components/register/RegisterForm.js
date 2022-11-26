import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
function RegisterForm() {
    const [userInfo, setUserInfo] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className="">
            <form
                onSubmit={handleSubmit()}
                className=" bg-[#070707] my-[0] mx-[auto] flex flex-col w-[600px] h-[100%] items-center rounded-[10px]"
            >
                <h1 className="text-center">Register</h1>
                <div className="flex flex-col w-[100%] pl-[30px] pr-[41px]">
                    <input type="name" placeholder="Username" />
                    <input type="email" placeholder="Your Noroff email" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className="mt-[14px] mb-[40px]">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
