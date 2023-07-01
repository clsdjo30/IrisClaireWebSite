import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Carousel() {
  return (
  
    <>
    <section>
      <h2 className="lg:text-5xl md:text-4xl text-4xl font-semibold px-4 leading-10 text-yellow-600 mt-16 text-center">
      Avec Iris Claire, votre avenir est entre vos mains
      </h2>
    <div className="2xl:mx-auto 2xl:container flex justify-center">

      <div className=" 2xl:px-20 px-6 py-12 w-full lg:w-4/5">
        {/* Carousel for Small-Sized Screen */}
        <CarouselProvider
          className="relative block sm:hidden"
          isPlaying={false}
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={3}
          interval={5000}
          playDirection="forward"
          infinite={false}
          step={1}>
          <div className="js-flickity flex justify-center items-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev">
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <Slider>
              <Slide index={0}>
                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="/woman_on_left.png"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className=" pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-10">
                      <h2 className="text-3xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Épanouissement professionnel
                      </h2>
                      <p className="mt-3 text-md leading-5 lg:text-2xl lg:leading-normal font-bold text-violet-900">
                        Que dois-je faire pour obtenir le job de mes rêves ?
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full h-full lg:hidden">
                    <img
                      src="/woman_on_left.png"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="w-full pl-6 pb-6 lg:pl-8 lg:pb-8 relative left-0 bottom-44">
                      <h2 className="text-3xl leading-6 lg:text-2xl lg:leading-normal font-bold text-white">
                        Épanouissement professionnel
                      </h2>
                      <p className="mt-3 text-md leading-5 lg:text-2xl lg:leading-normal font-bold text-violet-900">
                        Que dois-je faire pour obtenir le job de mes rêves ?
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="/wooman_on_left_001.png"
                      alt="chairs"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h2 className="text-4xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Un nouveau départ
                      </h2>
                      <p className="mt-3 text-md leading-5 lg:text-2xl lg:leading-normal font-bold text-violet-900">
                        Évitez les pensées négatives et éclairez votre chemin
                        vers le bonheur.
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full h-full lg:hidden">
                    <img
                      src="/wooman_on_left_001.png"
                      alt="chairs"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 relative left-0 bottom-44">
                      <h2 className="text-4xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Un nouveau départ
                      </h2>
                      <p className="mt-3 text-md leading-5 lg:text-2xl lg:leading-normal font-bold text-violet-300">
                        Évitez les pensées négatives et éclairez votre chemin
                        vers le bonheur.
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="/couple.png"
                      alt="chair"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Est-ce le bon?
                      </h1>
                    </div>
                  </div>
                  <div className="relative w-full h-full lg:hidden">
                    <img
                      src="/couple.png"
                      alt="chair"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Est-ce le bon?
                      </h1>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              id="next">
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for Medium and Large-Sized Screen */}
        <CarouselProvider
          className="relative hidden sm:block"
          isPlaying={true}
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={3}
          interval={5000}
          playDirection="forward"
          infinite={true}
          step={1}>
          <div className="flex justify-center items-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev">
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <Slider className="carousel__sliderLarge">
              <Slide className="carousel__inner-slideLarge" index={0}>
                <div className="gallery-cell w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="/woman_on_left.png"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="absolute bottom-56 right-36 md:-right-26 w-1/3">
                      <h1 className="text-xl leading-5 lg:text-6xl lg:leading-normal font-medium text-white text-center">
                        Épanouissement professionnel
                      </h1>
                      <h2 className="text-center text-xl leading-9 lg:text-2xl lg:leading-normal font-medium text-white">
                        Que dois-je faire pour obtenir le job de mes rêves ?
                      </h2>
                    </div>
                  </div>
                  <div className="relative w-full h-full lg:hidden">
                    <img
                      src="/woman_on_left.png"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Lounge Interior
                      </h1>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide className="carousel__inner-slideLarge" index={1}>
                <div className="gallery-cell w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="/wooman_on_left_001.png"
                      alt="chairs"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className=" absolute bottom-56 -right-36 md:-right-26">
                      <h1 className="w-full text-4xl leading-5 lg:text-6xl  lg:leading-normal font-medium text-white">
                        Un nouveau départ
                      </h1>
                      <h2 className="w-3/4 text-xl leading-9 lg:text-2xl lg:leading-normal font-medium text-white">
                        Évitez les pensées négatives et éclairez votre chemin
                        vers le bonheur.
                      </h2>
                    </div>
                  </div>
                  <div className="relative w-full h-full lg:hidden">
                    <img
                      src="/wooman_on_left_001.png"
                      alt="pourquoi"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="absolute bottom-44 right-44">
                      <h1 className="text-xl leading-5 lg:text-6xl lg:leading-normal font-medium text-white">
                        Un nouveau départ
                      </h1>
                      <h2 className="text-sm leading-5 lg:text-base lg:leading-normal font-medium text-white">
                        Évitez les pensées négatives et éclairez votre chemin
                        vers le bonheur.
                      </h2>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide className="carousel__inner-slideLarge" index={2}>
                <div className="gallery-cell w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="/couple.png"
                      alt="chair"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Est-ce le bon?
                      </h1>
                    </div>
                  </div>
                  <div className="relative w-full h-full lg:hidden">
                    <img
                      src="/couple.png"
                      alt="chair"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Lounge Interior
                      </h1>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              id="next">
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
      <style>
        {`
                    .gallery-cell {
                        height: 600px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 500px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                    }
                `}
      </style>
    </div>
    </section>
    </>
    
  );

}
