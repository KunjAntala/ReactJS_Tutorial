import React from 'react'

const GetStarted = () => {
  return (
    <div className="relative flex items-top justify-center min-h-[500px] bg-white sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <form className="p-6 flex flex-col justify-center">
                    <div className="flex flex-col">
                        <h1 className="text-center text-3xl my-4 sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Sign up
                        </h1>
                        <label for="name" className="hidden">
                            Full Name
                        </label>
                        <input
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 
                            text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"/>
                    </div>

                    <div className="flex flex-col mt-2">
                        <label for="email" className="hidden">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 
                            text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"/>
                    </div>

                    <div className="flex flex-col mt-2">
                        <label for="pass" className="hidden">
                            Password
                        </label>
                        <input
                            type="pass"
                            name="pass"
                            id="pass"
                            placeholder="Password"
                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border 
                            border-gray-400 text-gray-800 font-semibold focus:border-orange-500 
                            focus:outline-none"/>
                    </div>

                    <div className="flex flex-col mt-2">
                        <label for="tel" className="hidden">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="tel"
                            id="tel"
                            placeholder="Phone Number"
                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border 
                            border-gray-400 text-gray-800 font-semibold focus:border-orange-500 
                            focus:outline-none"/>
                    </div>

                    <button
                        type="submit"
                        className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white 
                        font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 
                        transition ease-in-out duration-300">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default GetStarted