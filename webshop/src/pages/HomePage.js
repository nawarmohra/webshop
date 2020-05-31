import React, { useContext, useEffect } from 'react'
import { shopContext } from '../context/shopContext'

const HomePage = () => {
    const { test } = useContext(shopContext)


    return (
        <div>
            Hello 
            { test }
        </div>
    )
}

export default HomePage
