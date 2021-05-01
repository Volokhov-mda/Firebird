import "./main.scss";

import Balance from '../balance/balance.jsx';
import Markets from "../markets/markets.jsx";

export default function Main(props) {
    return (
        <div className="app">
            <Balance supplyBalance={props.data.balance.supply} borrowBalance={props.data.balance.borrow} netAPY={props.data.balance.netAPY}/>
            <div className="markets-container">
                <Markets marketsName="Supply" markets={props.data.supplyMarkets} ariaLabel="Рынок предложения (Supply market)" />
                <Markets marketsName="Borrow" markets={props.data.borrowMarkets} ariaLabel="Рынок займов (Borrow market)" />
            </div>
        </div>
    )
}