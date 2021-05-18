import { useState } from "react";
import "./loaderWindow.scss";

export default function LoaderWindow(props) {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    window.addEventListener("resize", () => {
        setWindowHeight(window.innerHeight);
    });

    return (
        <div className="loader-window" style={{ height: `${windowHeight}px` }}>
            {props.children}
        </div>
    );
}