import { Grid, Switch } from "@material-ui/core";
import { useState } from "react";
import InlineSVG from 'svg-inline-react';
import "./marketsLine.scss";

export default function MarketsLine(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    });

    return (
        <Grid container spacing={0} alignItems="center" className="grid-container">
            <Grid item xs={windowWidth > 400 ? 5 : 4} className="market-cell" aria-label={`Название ассета - ${props.asset}`}>
                <div className="asset-wrapper">
                    <span className="logo-market"><InlineSVG className="logo" src={props.logo} /></span>
                    <p className={`asset-name`}>{props.asset}</p>
                </div>
            </Grid>
            <Grid item xs={windowWidth > 400 ? 2 : false} className="market-cell apy-market" aria-label={`APY = ${props.apy}`}>
                <div>{props.apy}</div>
            </Grid>
            <Grid item xs={windowWidth > 400 ? 3 : 4} className="market-cell" aria-label={`Кошелек - ${props.wallet}`}> {/* TODO: Кошелек? */}
                <div>{props.wallet}</div>
            </Grid>
            <Grid item xs={windowWidth > 400 ? 2 : 4} className="market-cell" aria-label={`Флажок collateral`}> {/* TODO: Collateral? */}
                <div><Switch color="primary" onClick={e => e.stopPropagation()} /></div>
            </Grid>
        </Grid>
    );
}
