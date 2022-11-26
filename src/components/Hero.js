import React from "react";

function Hero() {
    return (
        <div className="">
            <div
                className="w-full mt-11 h-[430px] rounded-[10px] bg-center bg-cover bg-[url('assets/prateek-katyal-xv7-GlvBLFw-unsplash.jpg')]
        flex flex-col align items-center"
            >
                <h1 className="mt-11 max-w-[590px] text-center">
                    Try out Social you today!
                </h1>
                <div className="mt-11">
                    <button className="mr-[37px]">Login</button>
                    <button>signup</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
