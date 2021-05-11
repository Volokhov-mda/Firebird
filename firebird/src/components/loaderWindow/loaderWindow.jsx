import "./loaderWindow.scss";

export default function LoaderWindow(props) {
    const windowHeight = window.innerHeight;

    return (
        <div className="loader-window" style={{ height: `${windowHeight}px` }}>
            {props.children}
        </div>
    );
}