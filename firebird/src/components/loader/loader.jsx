import "./loader.scss";

import { ReactComponent as Logo } from "./../../media/logo/F.svg";

export default function Loader(props) {
    const scale = .8;
    return (
        <div className="loader" style={{width: props.size + "px", height: props.size + "px"}}>
            <Logo className="loader-logo" 
                    style={{width: (props.size * scale) + "px", 
                            height: (props.size * scale) + "px",
                            top: `calc(50% - ${props.size * scale}px / 2)`,
                            left: `calc(50% - ${props.size * scale}px / 2)`,
                            }} />
        </div>
    );
}