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

function Home() {
    const [{ id, search_term }, dispatch] = useStateValue();
    const [movId, setMovId] = useState('');
    useEffect(() => {
        setMovId(id);
    }, []);
    return (
        <>
            <div className="homeBody">
                <div className="rightBody">
                    {search_term != null ? <Search /> :
                        <Router>
                            <Switch>
                                <Route exact path="/topRated">
                                    <Typepage title="Top Rated" link='topRated' />
                                </Route>
                                <Route exact path="/latest">
                                    <Typepage title="Latest Movies" link='latest' />
                                </Route>
                                <Route exact path="/action">
                                    <Typepage title="Action Movies" link='action' />
                                </Route>
                                <Route exact path="/horror">
                                    <Typepage title="Horror Movies" link='horror' />
                                </Route>
                                <Route exact path="/romance">
                                    <Typepage title="Romance Movies" link='romance' />
                                </Route>
                                <Route exact path="/comedy">
                                    <Typepage title="Comedy Movies" link='comedy' />
                                </Route>
                                <Route exact path="/documentries">
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