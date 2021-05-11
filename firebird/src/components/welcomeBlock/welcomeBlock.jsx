import { Grid } from "@material-ui/core";

import { ReactComponent as FirebirdLogo } from "./../../media/logo/F.svg";

import "./welcomeBlock.scss";

export default function WelcomeBlock(props) {
    return (
        <Grid container spacing={0} style={{ flexDirection: (props.reverse ? "row-reverse" : "row"), backgroundColor: props.backgroundColor }} className="welcome-block">
            <Grid item xs={5} className="image-block">
                <FirebirdLogo />
            </Grid>
            <Grid item xs={7} className="text-block">
                <div style={{ textAlign: (props.reverse ? "right" : "left"), paddingLeft: (props.reverse ? "30px" : 0), paddingRight: (props.reverse ? 0 : "30px") }} className={`column-header`}>
                    {props.children}
                </div>
            </Grid>
        </Grid>
    );
}