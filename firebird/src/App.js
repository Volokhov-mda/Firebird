import Header from "./components/header/header.jsx";
import Application from "./components/application/application.jsx";
import Footer from "./components/footer/footer.jsx";
import CoinInfo from "./components/coinInfo/coinInfo.jsx";

import { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { IntlProvider } from "react-intl";

import Welcome from "./components/welcome/welcome.jsx";
import Loader from "./components/loader/loader.jsx";
import LoaderWindow from "./components/loaderWindow/loaderWindow.jsx";

import "./App.scss";
import Page404 from "./components/page404/page404.jsx";

import { storageContractABI, storageContractAdress } from "./contract";

const textLocals = require("./textLocals.json");

const apiURL = "https://api-fb-finance.azurewebsites.net/api/coins/";

export default function App() {
  const [locale, setLocale] = useState("ru");
  const [renderMarkets, setRenderMarkets] = useState(false);
  const [coinsData, setCoinsData] = useState(undefined);

  const fetchCoinsData = () => {
    fetch(apiURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCoinsData(data);
        setRenderMarkets(true);
      });
  };

  document.addEventListener("DOMContentLoaded", () => {
    fetchCoinsData();
  });

  const sortAssets = (a, b) => (a.asset > b.asset ? 1 : (a.asset < b.asset ? -1 : 0))

  // storageContractABI.methods.retrieve().call((e, r) => { console.log(r) });
  // storageContractABI.methods.transferFrom("0x5A66CDc619538475516d8bf9d5A3d944f54cB87a", "0xE8726dd6E37aB795b907C04d88Fcc73E5A6F84ab", 13).send({ from: window.wallet }, (e, r) => {  });

  return (
    <div className="Main">
      <IntlProvider locale={locale} messages={textLocals[locale]}>
      <Router>
        <Header locale={locale} setLocale={setLocale} />
        <Switch>
          <Route exact path="/"><Welcome locale={locale} /></Route>
              <Route exaxt path="/app">
                {renderMarkets 
                  ? <Application data={coinsData} locale={locale} />
                  : <LoaderWindow><Loader size={275} /></LoaderWindow>
                }
              </Route>
          {renderMarkets 
            ? coinsData.markets.map(market => {
              coinsData.markets.sort(sortAssets);
                return (
                  <Route exact path={`/${market.link}`} key={`${market.link}`}>
                    <CoinInfo market={market} locale={locale} />
                  </Route>
                );
              })
            : <LoaderWindow><Loader size={275} /></LoaderWindow>
          }

          <Route>
            <Page404 />
          </Route>
        </Switch>
        <Footer locale={locale} />
      </Router>
      </IntlProvider>
    </div>
  );
}
