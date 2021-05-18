import WelcomeBlock from "../welcomeBlock/welcomeBlock";
import "./welcome.scss";

import PepeImg from "./../../media/images/blockchainPepe.jpg";
import PavelAwful from "./../../media/images/pavelAwful.jpg";
import { Button } from "@material-ui/core";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default function Welcome(props, locale) {
    return (
        <div className="welcome-wrapper">
            {/* TODO: Режим для слабовидящих */}
            <div className="welcome-header">
                <span className="app-name">Firebird Finance</span> -<br /> 
                <FormattedMessage
                    id="welcomeSubtitle"
                    defaultMessage="sample text"
                    value={{locale}} />
            </div>
            <WelcomeBlock reverse={false} backgroundColor="lightpink" image={PepeImg}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </WelcomeBlock>
            <WelcomeBlock reverse={true} backgroundColor="lightgray" image={PavelAwful}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </WelcomeBlock>

            <div className="try-now">
                <div className="try-now-container">
                    <div className="try-now-header">
                    <FormattedMessage
                        id="tryNow"
                        defaultMessage="sample text"
                        value={{locale}} />
                    </div>
                    <Route className="try-now-button-wrapper">
                        <Link to="/app">
                            <Button color="primary" variant="contained" className="try-now-button" onClick={() => { window.scroll(0, 0) }}>
                                <FormattedMessage
                                    id="goToApp"
                                    defaultMessage="sample text"
                                    value={{locale}} />
                            </Button>
                        </Link>
                    </Route>
                </div>
            </div>
        </div>
    )
}