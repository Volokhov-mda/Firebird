import "./application.scss";

import { FormattedMessage } from "react-intl";

import Balance from '../balance/balance.jsx';
import Markets from "../markets/markets.jsx";

export default function Application(props, locale) {
    const supplyMarketName = <FormattedMessage
                                id="supplyMarket"
                                defaultMessage="sample text"
                                value={{locale}} />
    const borrowMarketName = <FormattedMessage
                                id="borrowMarket"
                                defaultMessage="sample text"
                                value={{locale}} />

    return (
        <div className="app">
            <Balance supplyBalance="$2" borrowBalance="$0" netAPY="SMTH" locale={locale} />
            <div className="markets-container">
                <Markets isSupply={true} marketsName={supplyMarketName} markets={props.data.markets} locale={locale} ariaLabel="Рынок предложения (Supply market)" />
                <Markets isSupply={false} marketsName={borrowMarketName} markets={props.data.markets} locale={locale} ariaLabel="Рынок займов (Borrow market)" />
            </div>
        </div>
    )
}