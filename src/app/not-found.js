import Link from 'next/link'
import React from 'react'

const NOTFOUND = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="flex-col space-y-4 text-left px-6">
                    <div className="text-7xl font-bold text-indigo-700">404</div>
                    <div className="text-stone-500 font-medium">Oops, you still haven't found what you lookng for?</div>
                    <div className="flex space-x-4 items-center justify-start">
                        <Link href={'/'}>
                            <button className="text-sm font-medium bg-indigo-600 p-4 text-white">Back to Home Page</button>
                            </Link>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default NOTFOUND