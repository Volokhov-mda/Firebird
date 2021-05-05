import "./loaderWindow.scss";

export default function LoaderWindow(props) {
    const windowHeight = window.innerHeight;

    return (
        <div className="loader-window">
            {props.children}
        </div>
    );
}