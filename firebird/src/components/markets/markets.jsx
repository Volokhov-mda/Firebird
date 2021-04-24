import { useState } from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";

import MarketsLine from "../marketsLine/marketsLine";
import ModalWindow from "../modalWindow/modalWindow";

import "./markets.scss";

import { ReactComponent as CancelIcon } from "../../media/icons/cancel.svg";

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
    const [firstTabActive, setFirstTabActive] = useState(true);
    const [pressedMarketName, setPressedMarketName] = useState(undefined);
    const [pressedMarketIcon, setPressedMarketIcon] = useState(undefined);

    return (
        <div className="markets-wrapper" aria-label={props.ariaLabel}>
            <div className="item market-header">{props.marketsName} Markets</div>
            <div className="item" aria-label="Заголовки рынка">
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
            
            {props.markets.map(market => {
                return (        
                    <div className="item market" key={market.asset} aria-label={`Ассет ${market.asset}`}
                        onClick={e => {setModalWindowActive(true); setPressedMarketName(market.asset); setPressedMarketIcon(market.logo)}}>
                        <MarketsLine logo={market.logo} asset={market.asset} apy={market.apy} wallet={market.wallet} />
                    </div>
                );
            })}

            {modalWindowActive 
            ? <ModalWindow active={modalWindowActive} setActive={setModalWindowActive} asset={pressedMarketName}>
                <div className="modal-header">
                    <span className="selected-market-icon">{pressedMarketIcon}</span> <span className="selected-market-name">{pressedMarketName}</span>
                    <button id="cancel-button" onClick={() => setModalWindowActive(false)}><CancelIcon id="cancel-icon" /></button>
                </div>
                <div className="tab-wrapper" aria-label={`Переключение вкладок ${props.marketsName} и Repay`}> 
                    <div className={`tab ${firstTabActive ? "active" : ""}`} onClick={() => setFirstTabActive(true)} 
                        ariaLabel={`Вкладка ${props.marketsName}` + (firstTabActive ? ", активна" : "")}>
                        {props.marketsName}
                    </div>
                    
                    <div className={`tab ${!firstTabActive ? "active" : ""}`} onClick={() => setFirstTabActive(false)}
                        ariaLabel={"Вкладка Repay" + (!firstTabActive ? ", активна" : "")}>
                        Repay
                    </div>
                </div>
                <div className="tab-content" aria-label={"Содержимое вкладки " + (firstTabActive ? "Borrow" : "Repay")}>
                    {firstTabActive 
                    ? <>первый чел для {props.marketsName === "Borrow" ? "борова" : (props.marketsName === "Supply" ? "супа" : "непонятно чего")}</>
                    : <>второй чел для {props.marketsName === "Borrow" ? "борова" : (props.marketsName === "Supply" ? "супа" : "непонятно чего")}</>}
                </div>
            </ModalWindow> 
            : null}
        </div>
    );
}