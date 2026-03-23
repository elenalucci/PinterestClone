import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Button({color, className, name, onClick}){

    return(
        <>
            <button
                type="button" 
                className={`font-semibold w-20 h-12 rounded-xl cursor-pointer ${color} ${className}`} 
                onClick={onClick}
                >
                {name}
            </button>

        </>
    );
}

export default Button;