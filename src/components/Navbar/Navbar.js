import React, {useState, useRef, useEffect} from 'react';
import './Navbar.css';

const Navbar = ({userName, logoutHandler, getGithubUserData, searchTerm}) => {
    const [searchText, setSearchText] = useState('');
    const menuIconSpanRef = useRef();
    const searchBtnRef = useRef();
    const cancelBtnRef = useRef();
    const navItemsRef = useRef();
    const searchFormRef = useRef();

    const changeHandler = e => {
        setSearchText(e.target.value);
    }

    const barClickHandler = ()=>{
        navItemsRef.current.classList.add("active");
        menuIconSpanRef.current.classList.add("hide");
        searchBtnRef.current.classList.add("hide");
        cancelBtnRef.current.classList.add("show");
    }
    const cancelIconHandler = ()=>{
        navItemsRef.current.classList.remove("active");
        menuIconSpanRef.current.classList.remove("hide");
        searchBtnRef.current.classList.remove("hide");
        cancelBtnRef.current.classList.remove("show");
        searchFormRef.current.classList.remove("active");
        cancelBtnRef.current.style.color = "#ff3d00";
    }
    const searchIconHandler = ()=>{
        searchFormRef.current.classList.add("active");
        searchBtnRef.current.classList.add("hide");
        cancelBtnRef.current.classList.add("show");
    }

    const searchHandler = () => {
        if(searchText){
            getGithubUserData(searchText.trim())
        }
    }

    useEffect(() => {
        setSearchText(searchTerm);
    }, [searchTerm]);

    return(
        <div className="navbar__container">
            <nav>
                <div className="navbar__menu-icon"><span ref={menuIconSpanRef} className="fas fa-bars" onClick={barClickHandler}></span></div>
                <div className="navbar__logo"><i className="fab fa-github"></i>Github Search</div>
                <div className="navbar__form" ref={searchFormRef}>
                    <input type="search" className="navbar__search-data" placeholder="Search Github User" value={searchText} onChange={changeHandler} />
                    <button type="submit" className="fas fa-search" onClick={searchHandler}></button>
                </div>
                <div className="navbar__nav-items" ref={navItemsRef}>
                    <li>Welcome, {userName}</li>
                    <li><button onClick={logoutHandler}>Logout</button></li>
                </div>
                <div className="navbar__search-icon" ref={searchBtnRef} onClick={searchIconHandler}><span className="fas fa-search"></span></div>
                <div className="navbar__cancel-icon" ref={cancelBtnRef} onClick={cancelIconHandler}><span className="fas fa-times"></span></div>
            </nav>
        </div>
    )
}

export default Navbar;
