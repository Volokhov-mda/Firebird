import { useState } from "react";
import { Button, Grid } from "@material-ui/core";

import MarketsLine from "../marketsLine/marketsLine";
import ModalWindow from "../modalWindow/modalWindow";

import "./markets.scss";

import { FormattedMessage } from "react-intl";

import InlineSVG from 'svg-inline-react';

import { ReactComponent as FirebirdLogo } from "./../../media/logo/F.svg";
import { ReactComponent as CancelIcon } from "../../media/icons/cancel.svg";
import { Link } from "react-router-dom";
import Loader from "../loader/loader";

export default function Markets(props, locale) {
    const [modalWindowActive, setModalWindowActive] = useState(false);

    const [loaderActive, setLoaderActive] = useState(true);
    // const [loaderActive, setLoaderActive] = useState(false);

    const [firstTabActive, setFirstTabActive] = useState(true);
    const [pressedAsset, setPressedAsset] = useState(undefined);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [disabledSupply, setDisabledSupply] = useState(true);
    const [disabledWithdraw, setDisabledWithdraw] = useState(true);
    const [disabledBorrow, setDisabledBorrow] = useState(true);
    const [disabledRepay, setDisabledRepay] = useState(true);

    const maxValue = 100;

    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    });

    return (
        <div className="markets-wrapper" aria-label={props.ariaLabel}>
            <div className="item market-header">{props.marketsName}</div>
            <div className="item item-header" aria-label="Заголовки рынка">
                <Grid container spacing={0} className="grid-container">
                    <Grid item xs={windowWidth > 400 ? 5 : 4} className="market-cell">
                        <div className={`column-header`}>Asset</div>
                    </Grid>
                    <Grid item xs={windowWidth > 400 ? 2 : false} className="market-cell apy-market">
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
                <div className="modal-header-wrapper" aria-label={`Модальное окно ${pressedAsset.asset}`}>
                    <div className="modal-header" aria-label={`Заголовок модального окна ${pressedAsset.asset}`}>
                        <span className="selected-market-icon" aria-label="Логотип ассета"><InlineSVG src={pressedAsset.logo} /></span> 
                        <span className="selected-market-name" aria-label={`${pressedAsset.asset}`}>{pressedAsset.asset}</span>
                        <button className="cancel-button" aria-label="Закрыть" onClick={() => setModalWindowActive(false)}><CancelIcon className="cancel-icon" /></button>
                    </div>
                    <div className="modal-coin-info" aria-label={"Подробнее о валюте"}>
                        <Link to={`/${pressedAsset.link}`}>
                            <FormattedMessage
                                id="moreAboutCoin"
                                defaultMessage="sample text"
                                value={{locale}} />
                        </Link>
                    </div>
                </div>
                <div className="tab-wrapper" aria-label={`Переключение вкладок ${props.isSupply ? "Supply и Withdraw" : "Borrow и Repay"}`}> 
                    <div className={`tab ${firstTabActive ? "active" : ""}`} onClick={() => setFirstTabActive(true)} 
                        aria-label={`Вкладка ${props.isSupply ? "Supply" : "Borrow"}` + (firstTabActive ? ", активна" : "")}>
                        {props.isSupply
                            ?  <FormattedMessage
                                    id="supply"
                                    defaultMessage="sample text"
                                    value={{locale}} />
                            : <FormattedMessage
                                    id="borrow"
                                    defaultMessage="sample text"
                                    value={{locale}} />
                        }
                    </div>
                    
                    <div className={`tab ${!firstTabActive ? "active" : ""}`} onClick={() => setFirstTabActive(false)} 
                        aria-label={`Вкладка ${props.isSupply ? "Withdraw" : "Repay"}` + (!firstTabActive ? ", активна" : "")}>
                        {props.isSupply
                            ?  <FormattedMessage
                                    id="withdraw"
                                    defaultMessage="sample text"
                                    value={{locale}} />
                            : <FormattedMessage
                                    id="repay"
                                    defaultMessage="sample text"
                                    value={{locale}} />
                        }
                    </div>
                </div>
                <div className="tab-content" aria-label={"Содержимое вкладки " + (firstTabActive ? "Borrow" : "Repay")}>
                    {/* TODO: не забыть про режим для слабовидящих */}
                    {loaderActive
                    ? <div className="loader-wrapper" aria-label="Ожидание завершения транзакции"><Loader size={200} /></div>
                    : firstTabActive 
                        ? <div className="info" aria-label={props.isSupply ? "Вкладка Supply" : "Вкладка Borrow"}>
                            {props.isSupply 
                                ? <SupplyTab pressedAsset={pressedAsset} disabled={disabledSupply} setDisabled={setDisabledSupply} max={maxValue} />
                                : <BorrowTab pressedAsset={pressedAsset} disabled={disabledBorrow} setDisabled={setDisabledBorrow} max={maxValue} />
                            }
                        </div>
                        : <div className="info" aria-label={props.isSupply ? "Вкладка Withdraw" : "Вкладка Repay"}>
                            {props.isSupply 
                                ? <WithdrawTab pressedAsset={pressedAsset} disabled={disabledWithdraw} setDisabled={setDisabledWithdraw} max={maxValue} />
                                : <RepayTab pressedAsset={pressedAsset} disabled={disabledRepay} setDisabled={setDisabledRepay} max={maxValue} />
                            }
                        </div>
                    }
                </div>
            </ModalWindow> 
            : null}
        </div>
    );
}

function SupplyTab(props, locale) {
    return (
        <>
        <div className="form" aria-label="Ввод суммы">
            <div className="input">
                <input id="supply-input-box" className="input-box" type="number" placeholder="0" min="0" onInput={(event) => {props.setDisabled((event.target.value <= 0 || event.target.value > props.max) ? true : false)}} />
                <div className="max-button-wrapper">
                    <span>or</span>
                    <button className="max-button" 
                        onClick={() => {document.getElementById("supply-input-box").value = props.max}} aria-label="Ввести максимум">Max</button>
                </div>
            </div>
        </div>
        <div className="form" aria-label="Supply форма">
            <div className="form-header">Supply</div>
            <div className="calculation" aria-label={`Supply APY = ${props.pressedAsset.supply.apy}%`}>
                <span className="asset-info">
                    <span className="icon"><InlineSVG src={props.pressedAsset.logo} aria-label={`Логотип выбранного ассета ${props.pressedAsset.asset}`} /></span> <span className="description"> Supply APY</span>
                </span>
                <span>
                    <span>{props.pressedAsset.supply.apy}</span>
                </span>
            </div>
            <div className="calculation" aria-label={`Distribution APY = ${"-"}%`}>
                <span className="asset-info">
                    <span className="icon"><FirebirdLogo aria-label="Логотип Firebird" /></span> <span className="description"> Distribution APY</span>
                </span>
                <span>
                    <span>- %</span>
                </span>
            </div>
            <Button color="primary" variant="contained" className={"submit-button" + (props.disabled ? " disabled" : "")} disabled={props.disabled} aria-label="Включить (enable)">
                <FormattedMessage
                    id="confirmButton"
                    defaultMessage="sample text"
                    value={{locale}} />
            </Button>
        </div>
        </>
    );
}

function WithdrawTab(props, locale) {
    return (
        <>
            {/* TODO: ввод суммы? */}
            <div className="form" aria-label="Ввод суммы">
                <div className="input">
                    <input id="withdraw-input-box" className="input-box" type="number" placeholder="0" onInput={(event) => {props.setDisabled((event.target.value <= 0 || event.target.value > props.max) ? true : false)}} />
                    <div className="max-button-wrapper">
                        <span>or</span>
                        <button className="max-button" 
                            onClick={() => {document.getElementById("withdraw-input-box").value = props.max}} aria-label="Ввести максимум">Max</button>
                    </div>
                </div>
            </div>
            <div className="form" aria-label="Supply форма">
                <div className="form-header">Supply</div>
                <div className="calculation" aria-label={`Supply APY = ${props.pressedAsset.supply.apy}%`}>
                    <span className="asset-info">
                        <span className="icon"><InlineSVG src={props.pressedAsset.logo} aria-label={`Логотип выбранного ассета ${props.pressedAsset.asset}`} /></span> <span className="description"> Supply APY</span>
                    </span>
                    <span>
                        <span>{props.pressedAsset.supply.apy}</span>
                    </span>
                </div>
                <div className="calculation" aria-label={`Distribution APY = ${"-"}%`}>
                    <span className="asset-info">
                        <span className="icon"><FirebirdLogo aria-label="Логотип Firebird" /></span> <span className="description"> Distribution APY</span>
                    </span>
                    <span>
                        <span>- %</span>
                    </span>
                </div>
            </div>
            <div className="form" aria-label="Borrow Limit форма">
                <div className="form-header">Borrow Limit</div>
                <div className="calculation" aria-label={`Borrow Limit = $${0.00}`}>
                    <span className="asset-info">
                        <span className="description"> Borrow Limit</span>
                    </span>
                    <span>
                        <span>$0.00</span>
                    </span>
                </div>
                <div className="calculation" aria-label={`Borrow Limit Used = ${0}%`}>
                    <span className="asset-info">
                        <span className="description"> Borrow Limit Used</span>
                    </span>
                    <span>
                        <span>0%</span>
                    </span>
                </div>
                <Button color="primary" variant="contained" className={"submit-button" + (props.disabled ? " disabled" : "")} disabled={props.disabled} aria-label="Вывести">
                    <FormattedMessage
                        id="confirmButton"
                        defaultMessage="sample text"
                        value={{locale}} />
                </Button>
            </div>
        </>
    );
}

function BorrowTab(props, locale) {
    return (
        <>
            {/* TODO: ввод суммы? */}
            <div className="form" aria-label="Ввод суммы">
                <div className="input">
                    <input id="borrow-input-box" className="input-box" type="number" placeholder="0" onInput={(event) => {props.setDisabled((event.target.value <= 0 || event.target.value > props.max * .8) ? true : false)}} />
                    <div className="max-button-wrapper" aria-label="Или максимально возможное количество">
                        <span>or</span>
                        <button className="max-button" 
                            onClick={() => {document.getElementById("borrow-input-box").value = props.max * .8}} aria-label="Ввести 80%">80% limit</button>
                    </div>
                </div>
            </div>
            <div className="form" aria-label="Borrow форма">
                <div className="form-header">Borrow</div>
                <div className="calculation" aria-label={`Supply APY = ${props.pressedAsset.borrow.apy}%`}>
                    <span className="asset-info">
                        <span className="icon"><InlineSVG src={props.pressedAsset.logo} aria-label={`Логотип выбранного ассета ${props.pressedAsset.asset}`} /></span> <span className="description"> Supply APY</span>
                    </span>
                    <span>
                        <span>{props.pressedAsset.borrow.apy}</span>
                    </span>
                </div>
                <div className="calculation" aria-label={`Distribution APY = ${"-"}%`}>
                    <span className="asset-info">
                        <span className="icon"><FirebirdLogo aria-label="Логотип Firebird" /></span> <span className="description"> Distribution APY</span>
                    </span>
                    <span>
                        <span>- %</span>
                    </span>
                </div>
            </div>
            <div className="form" aria-label="Borrow Limit форма">
                <div className="form-header">Borrow Limit</div>
                <div className="calculation" aria-label={`Borrow Limit = $${0.00}`}>
                    <span className="asset-info">
                        <span className="description"> Borrow Balance</span>
                    </span>
                    <span>
                        <span>$0.00</span>
                    </span>
                </div>
                <div className="calculation" aria-label={`Borrow Limit Used = ${0}%`}>
                    <span className="asset-info">
                        <span className="description"> Borrow Limit Used</span>
                    </span>
                    <span>
                        <span>0%</span>
                    </span>
                </div>
                <Button color="primary" variant="contained" className={"submit-button" + (props.disabled ? " disabled" : "")} disabled={props.disabled} aria-label="Занять валюту">
                    <FormattedMessage
                        id="confirmButton"
                        defaultMessage="sample text"
                        value={{locale}} />
                </Button>
            </div>
        </>
    );
}

function RepayTab(props, locale) {
    return (
        <>
        <div className="form" aria-label="Ввод суммы">
            <div className="input">
                <input id="repay-input-box" className="input-box" type="number" placeholder="0" onInput={(event) => {props.setDisabled((event.target.value <= 0 || event.target.value > props.max * .8) ? true : false)}} />
                <div className="max-button-wrapper" aria-label="Или максимально возможное количество">
                    <span>or</span>
                    <button className="max-button" 
                        onClick={() => {document.getElementById("repay-input-box").value = props.max * .8}} aria-label="Ввести 80%">80% limit</button>
                </div>
            </div>
        </div>
        <div className="form" aria-label="Borrow форма">
            <div className="form-header">Borrow</div>
            <div className="calculation" aria-label={`Borrow APY = ${props.pressedAsset.borrow.apy}%`}>
                <span className="asset-info">
                    <span className="icon"><InlineSVG src={props.pressedAsset.logo} /></span> <span className="description"> Borrow APY</span>
                </span>
                <span>
                    <span>{props.pressedAsset.borrow.apy}</span>
                </span>
            </div>
            <div className="calculation" aria-label={`Distribution APY = ${"-"}%`}>
                <span className="asset-info">
                    <span className="icon"><FirebirdLogo aria-label="Логотип Firebird" /></span> <span className="description"> Distribution APY</span>
                </span>
                <span>
                    <span>- %</span>
                </span>
            </div>

            <Button color="primary" variant="contained" className={"submit-button" + (props.disabled ? " disabled" : "")} disabled={props.disabled} aria-label="Отдать долг">
                <FormattedMessage
                    id="confirmButton"
                    defaultMessage="sample text"
                    value={{locale}} />
            </Button>
        </div>
        </>
    );
}