import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
import Footer from "./components/footer/footer.jsx";
import CoinInfo from "./components/coinInfo/coinInfo.jsx";

import { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { IntlProvider } from "react-intl";

import Welcome from "./components/welcome/welcome.jsx";
import Loader from "./components/loader/loader.jsx";

const data = {
  user: {
    supply: "$2",
    borrow: "$0",
    netAPY: "SMTH"
  },
  markets: [
    {
      asset: "Compound Governance Token",
      logo: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><g filter="url(#filter0_i)"><path d="M48.0743 95.2518C74.1504 95.2518 95.2892 74.113 95.2892 48.0369C95.2892 21.9609 74.1504 0.822021 48.0743 0.822021C21.9982 0.822021 0.859375 21.9609 0.859375 48.0369C0.859375 74.113 21.9982 95.2518 48.0743 95.2518Z" fill="#00D395"/></g><path d="M48.0745 91.7325C72.2069 91.7325 91.7701 72.1693 91.7701 48.0369C91.7701 23.9045 72.2069 4.34131 48.0745 4.34131C23.9421 4.34131 4.37891 23.9045 4.37891 48.0369C4.37891 72.1693 23.9421 91.7325 48.0745 91.7325Z" fill="url(#paint0_linear)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.1549 63.8801C26.7427 63.0164 25.8789 61.4781 25.8789 59.8262V50.6025C25.8789 50.2495 25.9735 49.909 26.15 49.6064C26.6985 48.6607 27.9153 48.3391 28.8611 48.894L49.6794 61.0304C50.8962 61.7429 51.6465 63.0416 51.6465 64.4539V74.0117C51.6465 74.4467 51.5267 74.8818 51.2997 75.2537C50.6125 76.376 49.1498 76.729 48.0275 76.0418L28.1549 63.8801ZM59.187 46.3658C60.4038 47.0782 61.1541 48.377 61.1541 49.7892V69.1824C61.1541 69.7561 60.8451 70.2857 60.3471 70.5631L55.7887 73.1291C55.732 73.1606 55.6689 73.1858 55.6059 73.2047V62.4364C55.6059 61.043 54.8745 59.7506 53.6766 59.0318L35.3928 48.0933V35.9379C35.3928 35.5848 35.4874 35.2444 35.6639 34.9417C36.2124 33.996 37.4292 33.6745 38.375 34.2293L59.187 46.3658ZM68.2974 32.0416C69.5205 32.7477 70.2708 34.0591 70.2708 35.4713V63.7982C70.2708 64.3782 69.9492 64.9141 69.4385 65.1915L65.1198 67.5242V47.8032C65.1198 46.4099 64.3884 45.1238 63.1968 44.405L44.5095 33.1953V21.6641C44.5095 21.3111 44.6041 20.9706 44.7743 20.668C45.3228 19.7223 46.5396 19.4007 47.4853 19.9493L68.2974 32.0416Z" fill="#F9FAFB"/><path d="M48.0371 96C74.5263 96 96 74.5263 96 48.0371C96 21.5479 74.5263 0.0742188 48.0371 0.0742188C21.5479 0.0742188 0.0742188 21.5479 0.0742188 48.0371C0.0742188 74.5263 21.5479 96 48.0371 96Z" fill="#070A0E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27.8013 64.1309C26.3667 63.2534 25.4893 61.6907 25.4893 60.0127V50.6429C25.4893 50.2842 25.5853 49.9384 25.7647 49.631C26.3219 48.6703 27.558 48.3437 28.5187 48.9073L49.6668 61.236C50.9029 61.9597 51.665 63.2791 51.665 64.7137V74.4229C51.665 74.8649 51.5434 75.3068 51.3128 75.6846C50.6147 76.8246 49.1288 77.1833 47.9888 76.4852L27.8013 64.1309ZM59.325 46.339C60.5611 47.0628 61.3233 48.3821 61.3233 49.8167V69.5171C61.3233 70.0999 61.0094 70.6379 60.5035 70.9197L55.8729 73.5263C55.8153 73.5583 55.7512 73.584 55.6872 73.6032V62.6642C55.6872 61.2488 54.9442 59.9359 53.7273 59.2058L35.1539 48.0939V35.7459C35.1539 35.3873 35.2499 35.0414 35.4293 34.734C35.9865 33.7733 37.2226 33.4467 38.1833 34.0103L59.325 46.339ZM68.5797 31.7879C69.8222 32.5052 70.5844 33.8374 70.5844 35.272V64.0476C70.5844 64.6368 70.2577 65.1812 69.739 65.463L65.3518 67.8327V47.7993C65.3518 46.3839 64.6088 45.0774 63.3984 44.3472L44.415 32.96V21.2461C44.415 20.8874 44.5111 20.5416 44.684 20.2341C45.2412 19.2735 46.4773 18.9468 47.438 19.504L68.5797 31.7879Z" fill="#00D395"/></g><defs><filter id="filter0_i" x="0.859375" y="0.592313" width="94.4298" height="94.6595" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="-0.689125"/><feGaussianBlur stdDeviation="0.114854"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0.0699479 0 0 0 0 0.9875 0 0 0 0 0.717887 0 0 0 1 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow"/></filter><linearGradient id="paint0_linear" x1="48.0745" y1="4.34131" x2="48.0745" y2="91.7325" gradientUnits="userSpaceOnUse"><stop stop-color="#141E27"/><stop offset="1" stop-color="#141E27"/></linearGradient><clipPath id="clip0"><rect width="96" height="96" fill="white"/></clipPath></defs></svg>`,
      supply: {
        apy: "0.61%",
        wallet: "0 COMP",
      },
      borrow: {
        apy: "5.71%",
        wallet: "0 COMP",
      },
      description: "Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool Compound Coin very cool",
      link: "compoundGovernanceToken",
    },
    {
      asset: "Firebird Coin",
      logo: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="background" d="M26 51.9933C40.3594 51.9933 52 40.3542 52 25.9967C52 11.6391 40.3594 0 26 0C11.6406 0 0 11.6391 0 25.9967C0 40.3542 11.6406 51.9933 26 51.9933Z" fill="#E15F00"/><path className="text" d="M15 38.2208H19.1653V33.2224H36.3115V28.3627H19.1749V18.7551H36.3115V13.771H15L15 38.2208Z" fill="#fff"/></svg>`,
      supply: {
        apy: "0.62%",
        wallet: "0 COMP",
      },
      borrow: {
        apy: "5.72%",
        wallet: "0 COMP",
      },
      description: "Firebird Coin very cool",
      link: "firebirdCoin",
    },
    {
      asset: "Firebird Coin 2",
      logo: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="background" d="M26 51.9933C40.3594 51.9933 52 40.3542 52 25.9967C52 11.6391 40.3594 0 26 0C11.6406 0 0 11.6391 0 25.9967C0 40.3542 11.6406 51.9933 26 51.9933Z" fill="#E15F00"/><path className="text" d="M15 38.2208H19.1653V33.2224H36.3115V28.3627H19.1749V18.7551H36.3115V13.771H15L15 38.2208Z" fill="#fff"/></svg>`,
      supply: {
        apy: "0.63%",
        wallet: "0 COMP",
      },
      borrow: {
        apy: "5.73%",
        wallet: "0 COMP",
      },
      description: "Firebird Coin 2 very cool",
      link: "firebirdCoin2",
    }
  ]
}

const textLocals = {
  ru: {
    // HEADER
    homeNavButton: "Главная",
    appNavButton: "Приложение",
    connectWallet: "Подключить кошелек",

    // BALANCE
    supplyBalance: "Баланс предложения",
    netAPY: "Чистая доходность",
    borrowBalance: "Баланс займа",

    // MARKETS
    supplyMarket: "Рынок предложения",
    borrowMarket: "Рынок займа",
    moreAboutCoin: "Подробнее о валюте...",
    supply: "Предоставить валюту",
    withdraw: "Вывести валюту",
    borrow: "Занять валюту",
    repay: "Отдать долг",

    // COIN INFO
    backButton: "← Назад",

    // FOOTER
    createdBy: "Создали:",
    author1: "Никита Волохов",
    author2: "Крылов Павел"
  },
  en: {
    // HEADER
    homeNavButton: "Home",
    appNavButton: "App",
    connectWallet: "Connect wallet",

    // BALANCE
    supplyBalance: "Supply Balance",
    netAPY: "Net APY",
    borrowBalance: "Borrow Balance",
    supply: "Supply",
    withdraw: "Withdraw",
    borrow: "Borrow",
    repay: "Repay",

    // MARKETS
    supplyMarket: "Supply markets",
    borrowMarket: "Borrow markets",
    moreAboutCoin: "More about coin...",

    // COIN INFO
    backButton: "← Back",

    // FOOTER
    createdBy: "Created by:",
    author1: "Nikita Volokhov",
    author2: "Krylov Pavel"
  }
}

export default function App() {
  const [locale, setLocale] = useState("ru");

  // storageContract.methods.retrieve().call((e, r) => { console.log(r) });
  // storageContract.methods.store(1).send({ from: window.wallet }, (e, r) => {  });

  return (
    <div className="Main">
      <IntlProvider locale={locale} messages={textLocals[locale]}>
      <Router>
        <Header locale={locale} setLocale={setLocale} />
        <Switch>
          <Route exact path="/"><Welcome /></Route>
          <Route exaxt path="/app"><Main data={data} locale={locale} /></Route>
          {data.markets.map(market => {
            return (
              <Route exact path={`/${market.link}`} key={`${market.link}`}>
                <CoinInfo market={market} locale={locale} />
              </Route>
            );
          })}

          <Route>
            <div style={{"color": "#000"}}>
              404
              <Loader width="200" height="200" />
            </div>
          </Route>
        </Switch>
        <Footer locale={locale} />
      </Router>
      </IntlProvider>
    </div>
  );
}
