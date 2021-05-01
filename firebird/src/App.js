import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
import Footer from "./components/footer/footer.jsx";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ReactComponent as CompoundLogo } from "./media/icons/compound.svg";
import { ReactComponent as FirebirdIcon } from "./media/logo/F.svg";
import Welcome from "./components/welcome/welcome.jsx";

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
    },
    {
      asset: "Firebird Coin 2",
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
    },
    {
      asset: "Firebird Coin 2",
      apy: "0.66%",
      wallet: "0 COMP",
      logo: <FirebirdIcon />
    }
  ]
}

export default function Aoo() {

  return (
    <div className="Main">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"><Welcome /></Route>
          <Route path="/app"><Main data={data} /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
