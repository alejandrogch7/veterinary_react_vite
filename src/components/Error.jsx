import React from 'react'

const Error = ({children}) => {
    return (
        <div className=' bg-red-800 rounded-md text-center font-bold mb-5 p-5'>
            <p>{children}</p>
        </div>
    )
}

export default Error