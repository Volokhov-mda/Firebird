import "./coinInfo.scss";

import { FormattedMessage } from "react-intl";
import InlineSVG from 'svg-inline-react';

export default function CoinInfo(props, locale) {
    return (
        <div className="coin-info-wrapper" aria-label={`Информация о валюте ${props.market.asset}`}>
            <div className="coin-info-header">{props.market.asset}</div>
            <div className="coin-info">
                <div className="coin-info-logo" aria-label="Логотип валюты">
                    <InlineSVG className="logo" src={props.market.logo} />
                </div>
                <div className="coin-description">
                    <div className="description-content" aria-label="Описаные валюты">{props.market.description}</div>
                    <div className="back-button-wrapper">
                        <button className="back-button" onClick={() => { window.history.back(); }} aria-label="Кнопка Назад">
                            <FormattedMessage
                                id="backButton"
                                defaultMessage="sample text"
                                value={{locale}} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}