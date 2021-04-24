import './App.scss';
import Balance from './components/balance/balance';
import Header from "./components/header/header.jsx";
import Markets from "./components/markets/markets.jsx";
import Footer from "./components/footer/footer.jsx";

import { ReactComponent as CompoundLogo } from "./media/icons/compound.svg";
import { ReactComponent as FirebirdIcon } from "./media/logo/F.svg";

const data = {
  balance: {
    supply: "$2",
    borrow: "$0",
    netAPY: "SMTH"
  },
  supplyMarkets: [
    {
      asset: "Compound Governance Token",
      apy: "0.66%",
      wallet: "0 COMP",
      logo: <CompoundLogo />
    },
    {
      asset: "Firebird Coin",
      apy: "0.66%",
      wallet: "0 COMP",
      logo: <FirebirdIcon />
    }
  ],
  borrowMarkets: [
    {
      asset: "Compound Governance Token",
      apy: "5.72%",
      wallet: "0 COMP",
      logo: <CompoundLogo />
    },
    {
      asset: "Firebird Coin",
      apy: "0.66%",
      wallet: "0 COMP",
      logo: <FirebirdIcon />
    }
  ]
}

function App() {

  return (
    <div className="App">
      <Header />
      <Balance supplyBalance={data.balance.supply} borrowBalance={data.balance.borrow} netAPY={data.balance.netAPY}/>
      <div className="markets-container">
        <Markets marketsName="Supply" markets={data.supplyMarkets} ariaLabel="Рынок предложения (Supply market)" />
        <Markets marketsName="Borrow" markets={data.borrowMarkets} ariaLabel="Рынок займов (Borrow market)" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
