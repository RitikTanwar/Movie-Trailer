import React, { useEffect, useState } from 'react'
import Row from './Row'
import requests from './requests'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Typepage from './TypePage';
import './Home.css'
import Search from './Search'
import { useStateValue } from './StateProvider';
import Movie from './Movie'

    // const [{ search_term }, dispatch] = useStateValue();
//     return (
        // <div className="Search">
        //     <Row title={`Search Releated for ${search_term}`} fetchUrl={SEARCH_API + search_term} isLargeRow={true} />
        // </div>
//     )
function Home() {
    const [{ id, search_term }, dispatch] = useStateValue();
    // console.log(search_term);
    const [movId, setMovId] = useState('');
    // const []
    const API_KEY = '209b128cb703f61871ecb67c424d54c1';
    const SEARCH_API = `/search/movie?api_key=${API_KEY}&query=`
    useEffect(() => {
        setMovId(id);
    }, []);
    return (
        <>
            <div className="homeBody">
                <div className="rightBody">
                    {/* {search_term != null ? <Search /> : */}
                                {search_term != null?
                                <Row title={`Search Releated for ${search_term}`} fetchUrl={SEARCH_API + search_term} isLargeRow={true} />:
                        <Router>
                            <Switch>
                                <Route path="/topRated">
                                    <Typepage title="Top Rated" link='topRated' />
                                </Route>
                                <Route path="/latest">
                                    <Typepage title="Latest Movies" link='latest' />
                                </Route>
                                <Route path="/action">
                                    <Typepage title="Action Movies" link='action' />
                                </Route>
                                <Route path="/horror">
                                    <Typepage title="Horror Movies" link='horror' />
                                </Route>
                                <Route path="/romance">
                                    <Typepage title="Romance Movies" link='romance' />
                                </Route>
                                <Route path="/comedy">
                                    <Typepage title="Comedy Movies" link='comedy' />
                                </Route>
                                <Route path="/documentries">
                                    <Typepage title="Documentries" link='documentries' />
                                </Route>                                
                                <Route path={`/movie/:id`}>
                                    {console.log(id)}
                                    <Movie movid={id} />
                                </Route>
                                <Route exact path="/">
                                    <Row title="Trending Now" fetchUrl={requests.fetchTrending} link='trending' isLargeRow={true} />
                                </Route>
                            </Switch>
                        </Router>
                    }
                </div>
            </div>
        </>
    )
    
}
export default Home