import React from "react";
import "./modalWindow.scss";

export default function ModalWindow({active, setActive}) {
    return (
        <div className="modal-window" onClick={() => setActive(false)}>
            <div className="modal-window-content" onClick={e => e.stopPropagation()}>

            </div>
        </div>
    )
}