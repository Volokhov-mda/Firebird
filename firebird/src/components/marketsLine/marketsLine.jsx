import { Box, Grid, makeStyles, Switch } from "@material-ui/core";
import "./marketsLine.scss";

const useStyles = makeStyles(() => ({
    box: {
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
                <Box className={`${classes.box} ${classes.firstItem}`}><span className="logo">{props.logo}</span> <p className={classes.text}>{props.asset}</p></Box>
            </Grid>
            <Grid item xs={2} className={classes.gridItem}>
                <Box className={classes.box}>{props.apy}</Box>
            </Grid>
            <Grid item xs={3} className={classes.gridItem}>
                <Box className={classes.box}>{props.wallet}</Box>
            </Grid>
            <Grid item xs={2} className={classes.gridItem}>
                <Box className={classes.box}><Switch color="primary" onClick={e => e.stopPropagation()} /></Box>
            </Grid>
        </Grid>
    );
}
