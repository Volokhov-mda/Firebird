import "./balance.scss";

import { FormattedMessage } from "react-intl";

export default function Balance(props, locale) {
    const borrowLimit = 85;

    return (
        <div className="balance-container" aria-label="Текущие балансы предложения (supply) и займа (borrow)">
            <div id="balance-wrapper-desktop">
                <div className="balance-box" aria-label="Баланс предложения (supply)">
                    <div className="balance-header">
                        <FormattedMessage
                            id="supplyBalance"
                            defaultMessage="sample text"
                            value={{locale}} />
                    </div>
                    <div className="balance">{props.supplyBalance}</div>
                </div>
                <div className="balance-box" id="net-APY" aria-label="Чистый годовая процентная доходность (Net APY)">
                    <div className="balance-header">
                        <FormattedMessage
                            id="netAPY"
                            defaultMessage="sample text"
                            value={{locale}} />
                    </div>
                    <div className="balance">{props.netAPY}</div>
                </div>
                <div className="balance-box" aria-label="Баланс займа (borrow)">
                    <div className="balance-header">
                        <FormattedMessage
                            id="borrowBalance"
                            defaultMessage="sample text"
                            value={{locale}} />
                    </div>
                    <div className="balance">{props.borrowBalance}</div>
                </div>
            </div>
            
            <div id="balance-wrapper-mobile">
                <div className="balance-box" id="net-APY">
                    <div className="balance-header">
                        <FormattedMessage
                            id="netAPY"
                            defaultMessage="sample text"
                            value={{locale}} />
                    </div>
                    <div className="balance">{props.netAPY}</div>
                </div>
                <div className="boxes-wrapper-mobile">
                    <div className="balance-box">
                        <div className="balance-header">
                            <FormattedMessage
                                id="supplyBalance"
                                defaultMessage="sample text"
                                value={{locale}} />
                        </div>
                        <div className="balance">{props.supplyBalance}</div>
                    </div>
                    <div className="balance-box">
                        <div className="balance-header">
                            <FormattedMessage
                                id="borrowBalance"
                                defaultMessage="sample text"
                                value={{locale}} />
                        </div>
                        <div className="balance">{props.borrowBalance}</div>
                    </div>
                </div>
            </div>

            <div className="borrow-limit-wrapper">
                <div className="borrow-limit-header">Borrow limit <span id="borrow-limit">{borrowLimit}%</span></div>
                <div className="borrow-limit-visualization">
                    <div className="current-borrow-limit" style={{width: `${borrowLimit}%`}}></div>
                </div>
            </div>
        </div>
    );
}