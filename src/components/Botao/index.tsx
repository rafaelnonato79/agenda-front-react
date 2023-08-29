import React from "react";

interface IBotaoProps {
    type?:"button" | "submit" | "reset" | undefined;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

function Botao({type, className, onClick, children}: IBotaoProps){
    return(
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Botao