import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container header">
            <div className="flex space-between">
                <h1>Gogogo</h1>
                <nav className = "flex nav">
                    <Link to="/">Home</Link>
                </nav>
                
            </div>
        </div>
    )
}

export default Header
