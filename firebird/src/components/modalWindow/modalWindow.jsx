import React, { useState } from "react";
import "./modalWindow.scss";

export default function ModalWindow({setActive, children, asset}) {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    window.addEventListener("resize", () => {
        setWindowHeight(window.innerHeight);
    });


    return (
        <div className="modal-window" onClick={() => setActive(false)} style={{height: windowHeight + "px"}}>
            <div className="modal-window-content" onClick={e => e.stopPropagation()} aria-label={`Всплывающее окно ассета ${asset}`}>
                {children}
            </div>
        </div>
    )
}