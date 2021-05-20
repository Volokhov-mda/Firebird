import { Grid } from "@material-ui/core";

import { ReactComponent as FirebirdLogo } from "./../../media/logo/F.svg";

import "./welcomeBlock.scss";

export default function WelcomeBlock(props) {
    return (
        <div>
            <div className="welcome-block-mobile" style={{ backgroundColor: props.backgroundColor }}>
                <div className="welcome-block">
                    <div className="image-block">
                        {props.image ? <img src={props.image} className="image-picture" alt="blockchain image" /> : <FirebirdLogo />}
                    </div>
                    <div className="text-block">
                        {props.children}
                    </div>
                </div>
            </div>
            <div className="welcome-block-desktop" style={{ backgroundColor: props.backgroundColor }}>
                <Grid container spacing={0} style={{ flexDirection: (props.reverse ? "row-reverse" : "row") }} className="welcome-block">
                    <Grid item xs={5} className="image-block" style={{justifyContent: props.reverse ? "flex-end" : "flex-start"}}>
                        {props.image ? <img src={props.image} className="image-picture" alt="stonks image" /> : <FirebirdLogo />}
                    </Grid>
                    <Grid item xs={7} className="text-block">
                        <div style={{ textAlign: (props.reverse ? "right" : "left") }} className={`column-header`}>
                            {props.children}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}