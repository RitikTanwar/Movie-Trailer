import React, { useState } from 'react';
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './Sliderbar';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useStateValue } from './StateProvider';
import Search from './Search';
// import {
//     BrowserRouter as
// }

function Navbar() {
    const [movie, setMovie] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    let history = useHistory();
    const [{ search_term }, dispatch] = useStateValue();
    // const handleOnSubmit = (e) => {
    //     e.preventDefault();
    //     fetch(SEARCH_API + searchTerm)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setMovie(data.results);
    //         })
    //     console.log(movie);
    // }
    const handleOnChange = (e) => {
        // setSearchTerm(e.target.value);
        // if (e >= 2) history.push(`/search/${e}`)
        // console.log(e);
        // console.log(search_term);
        dispatch({
            type: 'GET_SEARCH_TERM',
            search_term: e
        })
    }

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div className="Navbar">
            <Router>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className='navbar'>
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        {/* <Link to={item.path}> */}
                                        <a href={item.path}>
                                            {/* {item.icon} */}
                                            <span >{item.title}</span>
                                        </a>
                                        {/* </Link> */}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>
                {/* </Router> */}
                {/* <Router forceRefresh={true}> */}
                {/* <Link to="/" > */}
                <a href="/">
                    {/* <button> */}
                    <img className='logo' src="data:image/jpeg;base64,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" alt="Trailers Now" />
                    {/* </button> */}
                </a>
                {/* </Link> */}
            </Router>
            <div className='search'>
                {/* <form onSubmit={handleOnSubmit}> */}
                <input
                    className="inputForm"
                    type="text"
                    name="search"
                    placeholder="Search movie by title"
                    // value={searchTerm}
                    onChange={(e) => handleOnChange(e.target.value)}
                />
                {/* <SearchIcon className="searchIcon" onClick={handleOnSubmit} /> */}
                {/* </form> */}
                <SearchIcon className="searchIcon" />
                {/* <Search query={searchTerm} /> */}
            </div>
            <img
                className="Nav-avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJX8xwlVULLoX36CcEswVMzRaqYabBH07vw&usqp=CAU"
                alt="Avatar"
            />
        </div>
    )
}
export default Navbar
