import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <p>The home owner is: {user?.email}</p>
        </div>
    );
};

export default Home;