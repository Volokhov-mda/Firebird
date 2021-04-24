import { ReactComponent as Logo } from './../../media/logo/F.svg';
import { ReactComponent as MenuIcon } from "./../../media/icons/menu.svg";
import { AppBar, Box, Button, IconButton, Container, Toolbar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import './header.scss';

const useStyles = makeStyles((theme) => ({
    header: {
        position: "static",
        flexGrow: 1,
        backgroundColor: "#0a0d15",
        boxShadow: "none"
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
      width: "112px",
      height: "53px",
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5),
      fontWeight: "bold",
      borderWidth: "2px",
      borderRadius: "35px"
    }
  }));

export default function Heaader() {
    const classes = useStyles();

    return (
        <AppBar color="transparent" className={classes.header} aria-label="Навигация сайта">
        <Container className={classes.container}>
            <Toolbar className={`${classes.toolBar} tool-bar`}>
                <IconButton color="inherit" aria-label="Логотип сайта" className={classes.logoButton}>
                    <Logo id="logo" width="52px" height="52px" />
                    {/* TODO: разобраться с anchorEl */}
                    {/* <Menu
                    id="simple-menu"
                    anchorEl="#menu-icon"
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                    </Menu> */}
                </IconButton>
                <Box className="nav-buttons-wrapper" aria-label="Кнопки навигации">
                    <Button color="primary" variant="contained" className={classes.navButton}>Главная</Button>
                    <Button color="secondary" variant="outlined" className={classes.navButton}>Услуги</Button>
                </Box>
                <IconButton color="inherit" aria-label="Меню" className={classes.menuButton}>
                    <MenuIcon id="menu-icon" width="52px" height="52px" />
                </IconButton>
            </Toolbar>
        </Container>
        </AppBar>
    );
}