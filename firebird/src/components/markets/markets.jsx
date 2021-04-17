import { Grid, makeStyles, Paper } from "@material-ui/core";
import MarketsLine from "../marketsLine/marketsLine";
import "./markets.scss";
import { ReactComponent as CompoundLogo } from "./../../media/icons/compound.svg";

const useStyles = makeStyles(() => ({
    gridItem: {
        backgroundColor: "red",
        height: "20px"
    },
    paper: {
        fontSize: "14px",
        color: "#787878",
        boxShadow: "none",
        textAlign: "end"
    },
    firstItem: {
        textAlign: "start"
    }
}));

export default function Markets(props) {
    const classes = useStyles();

    return (
        <div className="markets-wrapper">
            <div className="item market-header">{props.marketsName}</div>
            <div className="item">
            <Grid container spacing={0}>
                <Grid item xs={5}>
                    <Paper className={`${classes.paper} ${classes.firstItem}`}>Asset</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>APY</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Wallet</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>Collateral</Paper>
                </Grid>
            </Grid>
            </div>

            <div className="item">
                <MarketsLine logo={<CompoundLogo />} asset={props.markets[0].asset} apy={props.markets[0].apy} wallet={props.markets[0].wallet} />
            </div>
        </div>
    );
}