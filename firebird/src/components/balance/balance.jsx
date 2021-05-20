import "./balance.scss";

import { FormattedMessage } from "react-intl";
import { useState } from "react";

export default function Balance(props, locale) {
    const borrowLimit = 56;
    const [renderBalance, setRenderBalance] = useState(true);
    const [balance, setBalance] = useState(0);

    setTimeout(async () => {
        if (window.storageContractDai) {
            setBalance(await window.storageContractDai.methods.balanceOf("0x5A66CDc619538475516d8bf9d5A3d944f54cB87a").call((e, r) => { }) * 3 + 1000)
        }
        setRenderBalance(false);
        setRenderBalance(true);
    }, 5000);

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
                    <div className="balance">
                        {renderBalance ? 
                            "$" + balance
                        : null}
                    </div>
                </div>
                <div className="balance-box" id="net-APY" aria-label="Чистый годовая процентная доходность (Net APY)">
                    <div className="balance-header">
                        <FormattedMessage
                            id="netAPY"
                            defaultMessage="sample text"
                            value={{locale}} />
                    </div>
                    <div className="balance">                            
                        {renderBalance ? 
                            !window.storageContractDai ? "0.0%" : "12.3%"
                        : null}
                    </div>
                </div>
                <div className="balance-box" aria-label="Баланс займа (borrow)">
                    <div className="balance-header">
                        <FormattedMessage
                            id="borrowBalance"
                            defaultMessage="sample text"
                            value={{locale}} />
                    </div>
                    <div className="balance">
                        {renderBalance ? 
                            !window.storageContractDai ? "$0" : "$1113"
                        : null}
                    </div>
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
                    <div className="balance">
                        {renderBalance ? 
                            !window.storageContractDai ? "0.0%" : "12.3%"
                        : null}
                    </div>
                </div>
                <div className="boxes-wrapper-mobile">
                    <div className="balance-box">
                        <div className="balance-header">
                            <FormattedMessage
                                id="supplyBalance"
                                defaultMessage="sample text"
                                value={{locale}} />
                        </div>
                        <div className="balance">                        
                            {renderBalance ? 
                                "$" + balance
                            : null}
                        </div>
                    </div>
                    <div className="balance-box">
                        <div className="balance-header">
                            <FormattedMessage
                                id="borrowBalance"
                                defaultMessage="sample text"
                                value={{locale}} />
                        </div>
                        <div className="balance">
                            {renderBalance ? 
                                !window.storageContractDai ? "$0" : "$1113"
                            : null}
                        </div>
                    </div>
                </div>
            </div>

            <div className="borrow-limit-wrapper">
                <div className="borrow-limit-header">
                    <span id="borrow-limit-label">
                        <FormattedMessage
                            id="borrowLimit"
                            defaultMessage="sample text"
                            value={{locale}} />:
                    </span>
                    <span id="borrow-limit"> {borrowLimit}%</span></div>
                <div className="borrow-limit-visualization">
                    <div className="current-borrow-limit" style={{width: `${borrowLimit}%`}}></div>
                </div>
            </div>
        </div>
    );
}