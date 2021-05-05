import "./loader.scss";

import { ReactComponent as Logo } from "./../../media/logo/F.svg";

export default function Loader(props) {
    const scale = .8;
    return (
        <div className="loader" style={{width: props.width + "px", height: props.height + "px"}}>
            <Logo className="loader-logo" 
                    style={{width: (props.width * scale) + "px", 
                            height: (props.height * scale) + "px",
                            top: `calc(50% - ${props.width * scale}px / 2)`,
                            left: `calc(50% - ${props.width * scale}px / 2)`,
                            }} />
        </div>
    );
}