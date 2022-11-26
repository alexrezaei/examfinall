import React from "react";
import img1 from "../assets/georgia-de-lotz-rncny1536Xs-unsplash.jpg";
function Cta() {
    return (
        <div className="flex">
            <div className="w-[50%]">
                <h2>View fresh posts from our users!</h2>
                <p>
                    Check out what our users have been posting by visiting our
                    link below. or try searching for specific users by either id
                    or name!
                </p>
                <div>
                    <button>View posts</button>
                    <button>View profiles</button>
                </div>
            </div>
            <div className="w-[50%]">
                <img src={img1} />
            </div>
        </div>
    );
}

export default Cta;
