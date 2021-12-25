import { Link } from "react-router-dom";
import './menu.scss';

export const Menu: React.FC = () => {
    return (
        <div className="menu">
            <Link to="/strats">Finder</Link>
            <Link to="/calculator">Calculator</Link>
        </div>
    );

}