import { IHeaderProps } from "../interfaces/Header";


const Header = ({ userName, onLogoutButtonClick }: IHeaderProps) => {
    return (
        <div className="header">
            <div>
                <div className="header-item main">Dashboard</div>
            </div>
            <div>
                <span className="header-item">{userName}</span>
                <span className="header-item logout" onClick={onLogoutButtonClick}>Logout</span>
            </div>
        </div>
    )
}

export default Header;