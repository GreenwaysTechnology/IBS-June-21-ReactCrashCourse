import React from 'react';


export const Banner = props => {

    return  <div style={{ textAlign: 'center', height: 100, backgroundColor: 'pink' }}>
        {
            props.children
        }
    </div>
}