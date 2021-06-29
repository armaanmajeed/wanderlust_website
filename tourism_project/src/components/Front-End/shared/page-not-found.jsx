import React from 'react';

import NavBar from "./Navbar";

const PageNotFound = () => {
    return (
        <div>
            <NavBar />
            <h1 class="heading">Page does not exist</h1>
            <h3 style={{textAlign: 'center', marginTop: '5em', color: 'red'}}>Back-End Work is in progress!!</h3>
        </div>
    );
}
 
export default PageNotFound;