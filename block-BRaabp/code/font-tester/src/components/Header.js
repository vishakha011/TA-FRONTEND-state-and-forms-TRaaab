function Header(props) {
    return (
        <>
        <header className="header flex-between">
                <div className="logo">
                    <h1 className="brand-name">Google Fonts</h1>
                </div>
                <div className="navbar">
                    <ul className="nav flex-between">
                        <li className="nav-item"><a href="#home">Browse fonts</a></li>
                        <li className="nav-item"><a href="#home">Featured</a></li>
                        <li className="nav-item"><a href="#home">Articles</a></li>
                        <li className="nav-item"><a href="#home">About</a></li>
                    </ul>
                </div>  
            </header>
        </>
    )
}

export default Header;