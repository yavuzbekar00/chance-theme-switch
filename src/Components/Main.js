import React from 'react'
import { MainContext, useContext } from '../Context'

function Main() {
    const { theme } = useContext(MainContext)
    return (
        <div>
            Current Theme = {theme}
        </div>
    )
}

export default Main