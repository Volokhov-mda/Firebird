import React from "react";
import "./modalWindow.scss";

export default function ModalWindow({active, setActive, children, asset}) {
    const windowHeight = window.innerHeight;

    return (
        <div className="modal-window" onClick={() => setActive(false)} style={{height: windowHeight + "px"}}>
            <div className="modal-window-content" onClick={e => e.stopPropagation()} aria-label={`Всплывающее окно ассета ${asset}`}>
                {children}
            </div>
        </div>
    )
}