import React, { useState, useEffect } from 'react'
import { getAsyncHotelsData, getAsyncCountryList } from 'services'

export const Container = () => {
    const [Hotels, setHotels] = useState([])

    useEffect(() => {
        getAsyncHotelsData(0, 50).then(
            data => setHotels(data)
        )
        getAsyncCountryList().then(
            console.log
        )
        return () => {
            
        }
    }, [])

    return (<div>
        {Hotels.map( ({id, name}) => <p key={id}>
            {name}
        </p>)}
    </div>)

}