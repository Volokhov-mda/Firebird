import "./footer.scss";

import { FormattedMessage } from "react-intl";

import { ReactComponent as Logo } from "./../../media/logo/F.svg";
import { ReactComponent as GitHubLogo } from "./../../media/icons/GitHub.svg";

export default function Footer(props, locale) {
    return (
        <div id="footer" aria-label="Подвал сайта">
            <div className="footer-content">
                <div className="footer-block web-site" aria-label="Название и логотип сайта">
                    <a href="#">
                        <div className="footer-logo footer-header"><Logo /><span className="logo-text">irebird</span></div>
                    </a>
                </div>
                <div className="footer-block created" aria-label="Создали">
                    <div className="footer-header">
                        <FormattedMessage
                            id="createdBy"
                            defaultMessage="sample text"
                            value={{locale}} />
                    </div>
                    <div className="footer-block-content">
                        <div className="creator"><a href="https://github.com/Volokhov-mda">
                            <FormattedMessage
                                id="author1"
                                defaultMessage="sample text"
                                value={{locale}} />
                        </a></div>
                        <div className="creator"><a href="https://github.com/pkryloff">
                            <FormattedMessage
                                id="author2"
                                defaultMessage="sample text"
                                value={{locale}} />
                        </a></div>
                    </div>
                </div>
                <div className="footer-block open-sources" aria-label="Исходный код">
                    <div className="footer-header"><span>Open-source:</span></div>
                    <div className="footer-block-content">
                        <a href="https://github.com/Volokhov-mda/Firebird">
                            <div className="open-source"><span className="open-source-logo"><GitHubLogo /></span> GitHub</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>  
    );
}