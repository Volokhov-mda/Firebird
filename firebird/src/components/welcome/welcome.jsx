import WelcomeBlock from "../welcomeBlock/welcomeBlock";
import "./welcome.scss";

import Blockchain from "./../../media/images/blockchain.jpg";
import Stonks from "./../../media/images/stonks.jpg";
import { Button, StepIcon } from "@material-ui/core";
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
            <WelcomeBlock reverse={false} backgroundColor="#f9f9f9" image={Blockchain}>
                <FormattedMessage
                    id="welcomeBlock1"
                    defaultMessage="sample text"
                    value={{locale}} />
            </WelcomeBlock>
            <WelcomeBlock reverse={true} backgroundColor="#f9f9f9" image={Stonks}>
                <FormattedMessage
                    id="welcomeBlock2"
                    defaultMessage="sample text"
                    value={{locale}} /> 
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