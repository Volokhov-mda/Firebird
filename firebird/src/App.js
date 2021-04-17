import './App.scss';
import Balance from './components/balance/balance';
import Header from "./components/header/header.jsx";
import Markets from "./components/markets/markets.jsx";

const data = {
  balance: {
    supply: "2$",
    borrow: "0$",
    netAPY: "SMTH"
  },
  supplyMarkets: [
    {
      asset: "Compound Governance Token",
      apy: "0.66%",
      wallet: "0 COMP"
    }
  ],
  borrowMarkets: [
    {
      asset: "Compound Governance Token",
      apy: "5.72%",
      wallet: "0 COMP"
    }
  ]
}

function App() {

  return (
    <div className="App">
      <Header />
      <Balance supplyBalance={data.balance.supply} borrowBalance={data.balance.borrow} netAPY={data.balance.netAPY}/>
      <div className="markets-container">
        <Markets marketsName="Supply Markets" markets={data.supplyMarkets} />
        <Markets marketsName="Borrow Markets" markets={data.borrowMarkets} />
      </div>
      <div id="b">Footer</div>
    </div>
  );
}

export default App;
