import "./footer.scss";

import { ReactComponent as Logo } from "./../../media/logo/F.svg";
import { ReactComponent as GitHubLogo } from "./../../media/icons/GitHub.svg";

export default function Footer() {
    return (
        <div id="footer" aria-label="Подвал сайта">
            <div className="footer-content">
                <div className="footer-block web-site" aria-label="Название и логотип сайта">
                    <a href="#">
                        <div className="footer-logo footer-header"><Logo /><span className="logo-text">irebird</span></div>
                    </a>
                </div>
                <div className="created footer-block" aria-label="Создали">
                    <div className="footer-header">Создали:</div>
                    <div className="footer-block-content">
                        <div className="creator"><a href="#">Волохов Никита</a></div>
                        <div className="creator"><a href="#">Крылов Павел</a></div>
                    </div>
                </div>
                <div className="open-sources footer-block" aria-label="Исходный код">
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