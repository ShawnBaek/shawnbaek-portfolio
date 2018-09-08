import React from 'react';

const Home = () => {

    console.log('Im Home');
    return (
        <div className="center-align" style={{ marginTop: '200px' }}>
            <h3>Welcome</h3>
            <p>I'm the home page Component</p>
        </div>
    );
};

export default {
    component: Home
};

