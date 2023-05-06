import React from 'react'

const page = () => {
  return (
    <div>
        <div className="flex justify-center">
                <div className="h-[90%] w-full md:w-3/4 m-4">
                    <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
                        <h1 className="font-semibold text-3xl text-gray-700 m-2">Log In</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                    <div className="">
                            <input type="text" placeholder="Name"
                                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" required />
                        </div>
                        <div className="">
                            <input type="text" placeholder="Phone"
                                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" required  />
                        </div>
                        <div className="">
                            <textarea type="text" placeholder="Address" rows={4}
                                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"  required />
                        </div>
                        <div className="">
                            <input type="email" placeholder="Email"
                                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"  required />
                        </div>
                        <div className="">
                            <input type="password" placeholder="Password"
                                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" required  />
                        </div>
                       
                    </div>
                    <div className="text-center mt-7">
                        <button type='submit'
                            className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-violet-500 hover:bg-violet-600  font-medium ">Sign Up</button>
                    </div>
                   
                </div>
            </div>
    </div>
  )
}

export default page