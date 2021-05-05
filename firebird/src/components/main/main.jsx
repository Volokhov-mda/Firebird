import "./main.scss";

import { FormattedMessage } from "react-intl";

import Balance from '../balance/balance.jsx';
import Markets from "../markets/markets.jsx";

export default function Main(props, locale) {
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
            <Balance supplyBalance={props.data.user.supply} borrowBalance={props.data.user.borrow} netAPY={props.data.user.netAPY} locale={locale} />
            <div className="markets-container">
                <Markets isSupply={true} marketsName={supplyMarketName} markets={props.data.markets} ariaLabel="Рынок предложения (Supply market)" />
                <Markets isSupply={false} marketsName={borrowMarketName} markets={props.data.markets} ariaLabel="Рынок займов (Borrow market)" />
            </div>
        </div>
    )
}