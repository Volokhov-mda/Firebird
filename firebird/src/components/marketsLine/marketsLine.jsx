import { Grid, makeStyles, Paper, Switch } from "@material-ui/core";
import "./marketsLine.scss";

const useStyles = makeStyles(() => ({
    paper: {
        display: "flex",
        minWidth: 0,
        flexBasis: "80%",
        justifyContent: "flex-end",
        alignItems: "center",
        boxShadow: "none",
        textAlign: "end",
        whiteSpace: "nowrap"
    },
    text: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    firstItem: {
        textAlign: "start"
    }
}));

export default function MarketsLine(props) {
    const classes = useStyles();

    return (
        <Grid container spacing={0} alignItems="center">
            <Grid item xs={5} className={classes.gridItem}>
                <Paper className={`${classes.paper} ${classes.firstItem}`}><span className="logo">{props.logo}</span> <p className={classes.text}>{props.asset}</p></Paper>
            </Grid>
            <Grid item xs={2} className={classes.gridItem}>
                <Paper className={classes.paper}>{props.apy}</Paper>
            </Grid>
            <Grid item xs={3} className={classes.gridItem}>
                <Paper className={classes.paper}>{props.wallet}</Paper>
            </Grid>
            <Grid item xs={2} className={classes.gridItem}>
                <Paper className={classes.paper}><Switch color="primary"/></Paper>
            </Grid>
        </Grid>
    );
}
