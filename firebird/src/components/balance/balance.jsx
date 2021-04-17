import "./balance.scss";

export default function Balance(props) {
    return (
        <div className="balance-container">
            <div id="balance-wrapper-desktop">
                <div className="balance-box">
                    <div className="balance-header">Supply Balance</div>
                    <div className="balance">{props.supplyBalance}</div>
                </div>
                <div className="balance-box" id="net-APY">
                    <div className="balance-header">Net APY</div>
                    <div className="balance">{props.netAPY}</div>
                </div>
                <div className="balance-box">
                    <div className="balance-header">Borrow Balance</div>
                    <div className="balance">{props.borrowBalance}</div>
                </div>
            </div>
            
            <div id="balance-wrapper-mobile">
                <div className="balance-box" id="net-APY">
                    <div className="balance-header">Net APY</div>
                    <div className="balance">{props.netAPY}</div>
                </div>
                <div className="boxes-wrapper-mobile">
                    <div className="balance-box">
                        <div className="balance-header">Supply Balance</div>
                        <div className="balance">{props.supplyBalance}</div>
                    </div>
                    <div className="balance-box">
                        <div className="balance-header">Borrow Balance</div>
                        <div className="balance">{props.borrowBalance}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}