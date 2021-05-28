import React from 'react'
import RecomRow from './RecomRow'

function Recommended({ id }) {
    const recommend_api = `/movie/${id}/recommendations?api_key=209b128cb703f61871ecb67c424d54c1&language=en-US&page=1`
    // console.log(recommend_api)
    return (
        <div>
            <RecomRow title="Recommended" fetchUrl={recommend_api} />
        </div>
    )
}

export default Recommended
