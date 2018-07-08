import React from 'react';

const roomItem = () => {
    return (
        //TODO: Restructure using Grids
        <div>
            <hr style={{margin: '20px 0px'}}/>
            <img src="http://via.placeholder.com/150x150" style={{float: 'left', padding: '20px'}}/>
            <div >
                <h4>Room Name</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda consequatur culpa
                    deserunt dolorum error eveniet exercitationem fugit harum iste laborum maxime minus natus,
                    nemo quam, repudiandae sint tenetur ullam.</p>
                <ul>
                    <li>smoking</li>
                    <li>beach view</li>
                    <li>corner room</li>
                    <li>top floor</li>
                </ul>
                <h5 style={{color: 'green'}}>$165.00</h5>
                <div style={{marginLeft: '90%'}}>Test</div>
            </div>
            
            
        </div>
    );
};

export default roomItem;