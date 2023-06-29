import React, { useState } from "react";

function PresentApp() {
    
    return (
        <>
            <div className="relative bottom-44 left-0 w-full h-full pr-20">
                
                <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
                    <img className="w-full mt-8 md:mt-0 object-fill md:w-3/5 md:-ml-4 lg:-ml-4 xl:ml-0" src="/app_smartphone.png" alt="sample page" role="img" />
                    <div className="text-color w-full md:w-2/3 pt-16 lg:pt-32 xl:pt-12 bg-violet-900 p-20 rounded-md">
                        <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-violet-200 font-extrabold f-f-l">
                            Build, review and ship with ease
                            </h1>
                        <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
                            <h2>The next big thing starts here. Start building with Prodify and be the first to market with a product that is ready to take on the competition and delight your customers</h2>
                        </div>
                        <div className="lg:flex">
                            <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Start building now</button>
                            <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Try it out</button>
                        </div>
                    </div>
                    <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Start building now</button>
                    <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Try it out</button>
                </div>
            </div>


            <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>
        </>
    );
}

export default PresentApp;
