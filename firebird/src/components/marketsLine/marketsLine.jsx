import { Grid, makeStyles, Switch } from "@material-ui/core";
import InlineSVG from 'svg-inline-react';
import "./marketsLine.scss";

const useStyles = makeStyles(() => ({
    firstItem: {
        justifyContent: "flex-start",
        textAlign: "start"
    }
}));

export default function MarketsLine(props) {
    const classes = useStyles();
    const windowWidth = window.innerWidth;

    return (
        <Grid container spacing={0} alignItems="center" className="grid-container">
            <Grid item xs={windowWidth > 400 ? 5 : 4} className="market-cell" aria-label={`Название ассета - ${props.asset}`}>
                <div className="asset-wrapper">
                    <span className="logo-market"><InlineSVG className="logo" src={props.logo} /></span>
                    <p className={`asset-name`}>{props.asset}</p>
                </div>
            </Grid>
            <Grid item xs={windowWidth > 400 ? 2 : 0} className="market-cell apy-market" aria-label={`APY = ${props.apy}`}>
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
