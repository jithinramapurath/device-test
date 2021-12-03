import * as React from 'react';
import { useNavigate } from 'react-router';

import './App.css'

const Home = () => {

    let navigate = useNavigate();

    return (
        <div className="App">
            <br/>
            <br/>
            <br/>
            <button onClick={() => navigate('/video')}>  Check video</button>
            <br /> <br /> <br />
            <button onClick={() => navigate('/audio')}> Check audio</button>
            <br /> <br /> <br />
            <button onClick={() => navigate('/playVideo')}> Play video</button>
        </div>
    )
}

export default Home