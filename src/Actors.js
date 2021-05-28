import React, { useEffect, useState } from 'react'
import axios from './axios'
import './actor.css'

function Actors({ id }) {
    const base_url = 'https://image.tmdb.org/t/p/original/';
    const dummy_photo = 'https://lh3.googleusercontent.com/proxy/yEPU6GTq2u8PEOT-49hhYaAh9pWW631BPN9uVIHY5rFCEjozGHO1uGtmLnZqG3IFokxH4CUr-SSgE8SU2MsKNrehgpOVDKK3p6ZluuaV7cQ-CCudHZHY4dMC6A'
    const actor_api = `/movie/${id}/credits?api_key=209b128cb703f61871ecb67c424d54c1&language=en-US`
    const [castList, setCastList] = useState([]);

    const [crewList, setCrewList] = useState([]);
    useEffect(() => {
        async function fetchList() {
            const request = await axios.get(actor_api)
            // console.log(request.data);
            setCastList(request.data.cast)
            setCrewList(request.data.crew);
        }
        fetchList();
    }, [actor_api]);
    // console.log(castList);
    // console.log(crewList);
    return (
        <div className="actors_list">
            <div className="actor-card">
                {castList.map((cast) => (
                    cast.profile_path != null ?
                        <div key={cast.id} className="cast_post">
                            <img className="cast__poster" src={cast.profile_path != null ? base_url + cast.profile_path : dummy_photo} alt={cast.name} />
                            <img className="cast__poster" src={base_url + cast.profile_path} alt={cast.name} />
                            <div className="castInfo">
                                <h4 className="cast_name">{cast?.name}</h4>
                                <h4 className="cast_char">{cast?.character}</h4>
                            </div>
                        </div>
                        : ""
                ))}
            </div>
        </div>
    )
}

export default Actors
