import { ReactComponent as Logo } from './../../media/logo/F.svg';
import { AppBar, Box, Button, IconButton, Container, Toolbar, MenuItem, Menu } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { Switch, Route, Link } from "react-router-dom";

import { FormattedMessage } from "react-intl";

import { storageContractABI, storageContractAdress } from "./../../contract.js";

import { ReactComponent as CancelIcon } from "./../../media/icons/cancel.svg";
import { ReactComponent as MenuIcon } from "./../../media/icons/menu.svg";

import './header.scss';
import { useState } from 'react';

import Web3 from 'web3';

import ModalWindow from '../modalWindow/modalWindow';
import Loader from '../loader/loader';
import LoaderWindow from '../loaderWindow/loaderWindow';

const useStyles = makeStyles((theme) => ({
    header: {
      position: "relative",
      flexGrow: 1,
      backgroundColor: "#0a0d15",
      boxShadow: "none",
      paddingRight: "0 !important",
      paddingBottom: "20px",
      zIndex: "1"
    },
    container: {
      // Внимание, говнокод. Бесполезный блок, плохо считается max-width.
      maxWidth: "calc(1280px + 24px * 2)",
      padding: "0 24px"
    },
    toolBar: {
      padding: 0,
      minHeight: 0,
      display: "flex",
      justifyContent: "space-between"
    },
    logoButtonWrapper: {
      width: "120px"
    },
    logoButton: {
      marginRight: theme.spacing(1),
      padding: 0
    },
    menuButton: {
      marginLeft: theme.spacing(1),
      padding: 0
    },
    navButton: {
      width: "140px",
      height: "53px",
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5),
      fontWeight: "bold",
      borderWidth: "2px",
      borderRadius: "35px"
    },
    connectButton: {
      fontSize: "10px",
      height: "53px",
      width: "100%",
      padding: "0",
    }
}));


function NavButtons(props, locale) {
  return (
    <Route exact={props.exact} path={props.path}>
      <Link to="/" className="nav-link">
        <Button color={props.isFirstActive ? "primary" : "secondary"} variant={props.isFirstActive ? "contained" : "outlined"} className={props.styles}>
          <FormattedMessage
              id="homeNavButton"
              defaultMessage="sample text"
              value={{locale}} />
        </Button>
      </Link>
      <Link to="/app" className="nav-link">                    
        <Button color={props.isSecondActive ? "primary" : "secondary"} variant={props.isSecondActive ? "contained" : "outlined"} className={props.styles}>
          <FormattedMessage
              id="appNavButton"
              defaultMessage="sample text"
              value={{locale}} />
        </Button>
      </Link>
    </Route>
  );
}

export default function Heaader(props, locale) {
    const classes = useStyles();
    const [loaderActive, setLoaderActive] = useState(false);
    const [walletConnected, setWalletConnected] = useState(false);

    const handleChangeLocale = (event) => {
      props.setLocale(props.locale === "ru" ? "en" : "ru");
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };


    const formatWallet = (wallet) => {
      return wallet.substring(0, 6) + "..." + wallet.substring(wallet.length - 3);
    }

    const startConnection = async () => {
      if (typeof window.web3 !== 'undefined') {
        window.web3 = new Web3(Web3.givenProvider);
      } else {
        alert("Подключите MetaMask");
        setWalletConnected(false);
      }

      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        window.wallet = account;
        window.storageContract = new window.web3.eth.Contract(storageContractABI, storageContractAdress); 
        setWalletConnected(true); 
        setLoaderActive(false); 
      } catch (err) {
        alert(err.message);
        setLoaderActive(false);
      }
    }

    const handleWalletButton = () => {
      if (!walletConnected) {
        setLoaderActive(true); 
        startConnection();
      } else {
        console.log("TODO some wallet operations");
      }
    }

    return (
        <AppBar color="transparent" className={classes.header} aria-label="Навигация сайта">
        <Container className={classes.container}>
            <Toolbar className={`${classes.toolBar} tool-bar`}>
              <div className="logo-wrapper header-item">
                <div className="logo-switcher-wrapper">
                  <Route>
                    <Link to="/" className={classes.logoButtonWrapper}>
                      <IconButton color="inherit" aria-label="Логотип сайта" className={`${classes.logoButton}`}>
                        <Logo className="logo" width="52px" height="52px" />
                      </IconButton>
                    </Link>
                    <div>
                      <Button color="primary" className="locale-switch" onClick={handleChangeLocale}>
                        {props.locale === "ru" ? "рус" : "en"}
                      </Button>
                    </div>
                  </Route>
                </div>
              </div>


              <div className="header-item nav-buttons">
                <div className="nav-buttons-wrapper" aria-label="Кнопки навигации">
                  <Switch>
                    <NavButtons exact={true} path="/app" isFirstActive={false} isSecondActive={true} locale={locale} styles={classes.navButton} />
                    <NavButtons exact={true} path="/" isFirstActive={true} isSecondActive={false} locale={locale} styles={classes.navButton} />
                    <NavButtons exact={false} path={null} isFirstActive={false} isSecondActive={false} locale={locale} styles={classes.navButton} />
                  </Switch>
                </div>
              </div>

              <div className="header-item connect-button-wrapper">
                <Button color="primary" className={`${classes.connectButton} connect-button`} onClick={ handleWalletButton }>
                  {window.wallet 
                  ? <span className="wallet">{formatWallet(window.wallet)}</span>
                  : <FormattedMessage
                      id="connectWallet"
                      defaultMessage="sample text"
                      value={{locale}} />
                  }
                </Button>
              </div>

              <div className="header-item hamburger-menu">
                <IconButton color="inherit" aria-label="Меню" className={classes.menuButton} onClick={handleClick}>
                  <MenuIcon id="menu-icon" width="52px" height="52px" />
                </IconButton>
                <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      getContentAnchorEl={null}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                      transformOrigin={{ vertical: "top", horizontal: "center" }}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                    <Route>
                    <Link to="/" className="menu-item">
                      <MenuItem>
                        <FormattedMessage
                            id="homeNavButton"
                            defaultMessage="sample text"
                            value={{locale}} />
                      </MenuItem>
                    </Link>
                    <Link to="/app" className="menu-item">
                      <MenuItem>
                        <FormattedMessage
                            id="appNavButton"
                            defaultMessage="sample text"
                            value={{locale}} />
                      </MenuItem>
                    </Link>
                    </Route>
                </Menu>
              </div>

              {loaderActive ? 
                <ModalWindow setActive={setLoaderActive}>
                  <div className="modal-header-wrapper">
                      <div className="modal-header">
                          <span className="header">
                            <FormattedMessage
                              id="loading"
                              defaultMessage="sample text"
                              value={{locale}} />
                          </span>
                          <span className="header-subtitle">
                            <FormattedMessage
                              id="loading-subtitle"
                              defaultMessage="sample text"
                              value={{locale}} /> <a href="https://metamask.io/">Metamask</a>
                          </span>
                          <button className="cancel-button" onClick={() => setLoaderActive(false)}><CancelIcon className="cancel-icon" /></button>
                      </div>
                  </div>
                  <div className="loader-wrapper">
                    <Loader size="200" />
                  </div>
                </ModalWindow>
                : null}
            </Toolbar>
        </Container>
        </AppBar>
    );
}