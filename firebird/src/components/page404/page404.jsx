import { FormattedMessage } from "react-intl";
import "./page404.scss";

export default function Page404(props, locale) {
    return (
        <div className="page-404-wrapper" aria-label="Ошибка 404 - страница не найдена">
            <div className="page-404-header">404</div>
            <div className="page-404-not-found">
            <FormattedMessage
                id="pageNotFoundText"
                defaultMessage="sample text"
                value={{locale}} />
            </div>
        </div>
    );
}