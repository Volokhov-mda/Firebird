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

const textLocals = require("./textLocals.json");

const apiURL = "https://api-fb-finance.azurewebsites.net/api/coins/";

export default function App() {
  const [locale, setLocale] = useState("ru");
  const [renderMarkets, setRenderMarkets] = useState(false);
  const [coinsData, setCoinsData] = useState(undefined);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

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

  // storageContract.methods.retrieve().call((e, r) => { console.log(r) });
  // storageContract.methods.store(1).send({ from: window.wallet }, (e, r) => {  });

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
                return (
                  <Route exact path={`/${market.link}`} key={`${market.link}`}>
                    <CoinInfo market={market} locale={locale} />
                  </Route>
                );
              })
            : <LoaderWindow><Loader size={275} /></LoaderWindow>
          }

          <Route>
            <div className="page-404-wrapper" aria-label="Ошибка 404 - страница не найдена">
              <div className="page-404-header">404</div>
              <div className="page-404-not-found">Данной страницы приложения не существует!</div>
            </div>
          </Route>
        </Switch>
        <Footer locale={locale} />
      </Router>
      </IntlProvider>
    </div>
  );
}
