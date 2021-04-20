import { Box, Grid, makeStyles } from "@material-ui/core";
import MarketsLine from "../marketsLine/marketsLine";
import "./markets.scss";
import { ReactComponent as CompoundLogo } from "./../../media/icons/compound.svg";
import ModalWindow from "../modalWindow/modalWindow";
import { useState } from "react";

const useStyles = makeStyles(() => ({
    gridItem: {
        backgroundColor: "red",
        height: "20px"
    },
    box: {
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
    const [modalWindowActive, setModalWindowActive] = useState(false);

    return (
        <div className="markets-wrapper">
            <div className="item market-header">{props.marketsName}</div>
            <div className="item">
            <Grid container spacing={0}>
                <Grid item xs={5}>
                    <Box className={`${classes.box} ${classes.firstItem}`}>Asset</Box>
                </Grid>
                <Grid item xs={2}>
                    <Box className={classes.box}>APY</Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.box}>Wallet</Box>
                </Grid>
                <Grid item xs={2}>
                    <Box className={classes.box}>Collateral</Box>
                </Grid>
            </Grid>
            </div>

            <div className="item market" onClick={() => setModalWindowActive(true)}>
                <MarketsLine logo={<CompoundLogo />} asset={props.markets[0].asset} apy={props.markets[0].apy} wallet={props.markets[0].wallet} />
            </div>
            {/* FIX: Плохо, что на странице существует два модальных окна. */}
            {modalWindowActive ? <ModalWindow active={modalWindowActive} setActive={setModalWindowActive} /> : null}
        </div>
    );
}