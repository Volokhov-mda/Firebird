import { ReactComponent as Logo } from './../../media/logo/F.svg';
import { ReactComponent as MenuIcon } from "./../../media/icons/menu.svg";
import { AppBar, Box, Button, IconButton, Container, Toolbar, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { Switch, Route, Link } from "react-router-dom";

import { FormattedMessage } from "react-intl";

import './header.scss';
import { useState } from 'react';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    header: {
      position: "relative",
      flexGrow: 1,
      backgroundColor: "#0a0d15",
      boxShadow: "none",
      paddingRight: "0 !important",
      paddingBottom: "20px",
      zIndex: "0"
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
    logoButton: {
      marginRight: theme.spacing(1),
      padding: 0
    },
    menuButton: {
      marginLeft: theme.spacing(1),
      padding: 0
    },
    navButton: {
      width: "130px",
      height: "53px",
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5),
      fontWeight: "bold",
      borderWidth: "2px",
      borderRadius: "35px"
    }
  }));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

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
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleChange = (event) => {
      props.setLocale(event.target.value);
    }
  

    return (
        <AppBar color="transparent" className={classes.header} aria-label="Навигация сайта">
        <Container className={classes.container}>
            <Toolbar className={`${classes.toolBar} tool-bar`}>
                <Route>
                  <Link to="/">
                    <IconButton color="inherit" aria-label="Логотип сайта" className={classes.logoButton}>
                      <Logo className="logo" width="52px" height="52px" />
                    </IconButton>
                  </Link>
                </Route>

                <Box className="nav-buttons-wrapper" aria-label="Кнопки навигации">
                  <Switch>
                    <NavButtons exact={true} path="/app" isFirstActive={false} isSecondActive={true} locale={locale} styles={classes.navButton} />
                    <NavButtons exact={true} path="/" isFirstActive={true} isSecondActive={false} locale={locale} styles={classes.navButton} />
                    <NavButtons exact={false} path={null} isFirstActive={false} isSecondActive={false} locale={locale} styles={classes.navButton} />
                  </Switch>
                </Box>

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
                    <StyledMenuItem onClick={undefined}>Profile</StyledMenuItem>
                    <StyledMenuItem onClick={undefined}>My account</StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}>Logout</StyledMenuItem>
                </Menu>

                <select style={{"width": "52px"}} onChange={handleChange} aria-label="Выбор языка">
                  {["ru", "en"].map((loc) => {
                    return <option key={loc}>{loc}</option>
                  })}
                </select>
            </Toolbar>
        </Container>
        </AppBar>
    );
}