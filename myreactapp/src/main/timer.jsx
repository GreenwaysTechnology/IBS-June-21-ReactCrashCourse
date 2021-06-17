import React, { useState, useEffect } from 'react';

export const Timer = props => {
    const [seconds, setSeconds] = useState(0);

    //
    useEffect(() => {
        //called after render is called:All resource insentive calls
        setInterval(() => {
            setSeconds(seconds + 1)
        }, 1000)
    })

    return <div>
        <h1>Timer App: Using useEffect hook</h1>
        <h3>Running...{seconds}</h3>
    </div>
}