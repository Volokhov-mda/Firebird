import { useState } from "react";
import { div, Grid, makeStyles } from "@material-ui/core";

import MarketsLine from "../marketsLine/marketsLine";
import ModalWindow from "../modalWindow/modalWindow";

import "./markets.scss";

import { ReactComponent as CancelIcon } from "../../media/icons/cancel.svg";
import { Link } from "react-router-dom";

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
    const [pressedAsset, setPressedAsset] = useState(undefined);
    const windowWidth = window.innerWidth;

    return (
        <div className="markets-wrapper" aria-label={props.ariaLabel}>
            <div className="item market-header">{props.marketsName}</div>
            <div className="item item-header" aria-label="Заголовки рынка">
                <Grid container spacing={0} className="grid-container">
                    <Grid item xs={windowWidth > 400 ? 5 : 4} className="market-cell">
                        <div className={`column-header`}>Asset</div>
                    </Grid>
                    <Grid item xs={windowWidth > 400 ? 2 : 0} className="market-cell apy-market">
                        <div className={`column-header`}>APY</div>
                    </Grid>
                    <Grid item xs={windowWidth > 400 ? 3 : 4} className="market-cell">
                        <div className={`column-header`}>Wallet</div>
                    </Grid>
                    <Grid item xs={windowWidth > 400 ? 2 : 4} className="market-cell">
                        <div className={`column-header`}>Collateral</div>
                    </Grid>
                </Grid>
            </div>
            
            {props.markets.map(market => {
                return (
                    <div className="item market" key={market.asset} aria-label={`Ассет ${market.asset}`}
                        onClick={() => { setModalWindowActive(true); setPressedAsset(market); }}>
                        <MarketsLine 
                            logo={market.logo} 
                            asset={market.asset} 
                            apy={props.isSupply ? market.supply.apy : market.borrow.apy} 
                            wallet={props.isSupply ? market.supply.wallet : market.borrow.wallet} />
                    </div>
                );
            })}

            {modalWindowActive 
            ? <ModalWindow active={modalWindowActive} setActive={setModalWindowActive} asset={pressedAsset.asset}>
                <div className="modal-header-wrapper">
                    <div className="modal-header">
                        <span className="selected-market-icon">{pressedAsset.logo}</span> <span className="selected-market-name">{pressedAsset.asset}</span>
                        <button id="cancel-button" onClick={() => setModalWindowActive(false)}><CancelIcon id="cancel-icon" /></button>
                    </div>
                    <div className="modal-coin-info"><Link to={`/${pressedAsset.link}`}>Подробнее о валюте...</Link></div>
                </div>
                <div className="tab-wrapper" aria-label={`Переключение вкладок ${props.marketsName} и Repay`}> 
                    <div className={`tab ${firstTabActive ? "active" : ""}`} onClick={() => setFirstTabActive(true)} 
                        aria-label={`Вкладка ${props.marketsName}` + (firstTabActive ? ", активна" : "")}>
                        {props.marketsName}
                    </div>
                    
                    <div className={`tab ${!firstTabActive ? "active" : ""}`} onClick={() => setFirstTabActive(false)}
                        ariaLabel={"Вкладка Repay" + (!firstTabActive ? ", активна" : "")}>
                        Repay
                    </div>
                </div>
                <div className="tab-content" aria-label={"Содержимое вкладки " + (firstTabActive ? "Borrow" : "Repay")}>
                    {firstTabActive 
                    ? <>первый чел для {!props.isSupply ? "борова" : (props.isSupply ? "супа" : "непонятно чего")}</>
                    : <>второй чел для {!props.isSupply ? "борова" : (props.isSupply ? "супа" : "непонятно чего")}</>}
                </div>
            </ModalWindow> 
            : null}
        </div>
    );
}