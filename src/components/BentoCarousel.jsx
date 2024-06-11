"use client";

import { Carousel } from '@mantine/carousel';
import { useEffect, useRef, useState } from 'react';
import Header from './Header';
import CloseIcon from '@/icons/CloseIcon';

export default function BentoCarousel({ onClick, onClose, disableSwitching }) {
  const [ slides, setSlides ] = useState([]);
  const [ embla, setEmbla ] = useState(null);
  const [ showContent, setShowContent ] = useState(false);
  const [ animateContent, setAnimateContent ] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    setSlides([
      { img: '/img/firedrop.svg', name: "FIREDROP", content: <p> <a className='highlighted' href="https://firedrop.top/">Firedrop.io</a> is my recent SaaS website, developed with <a className='highlighted' href="https://react.dev/learn">React.js</a> Tailwind CSS and TypeScript. Full stack React application  that includes authentication, Multi-tenancy, Roles & Permissions, Landing Page, Database, Logging, Testing. It's intended to provide college students with a comprehensive set of pre-built projects and software solutions. </p> },
      { img: '/img/at_sign.svg', name: "Ascii Effect", content: <p>A modified version of the AsciiEffect from the <a className='highlighted' href="https://unpkg.com/browse/three@0.160.0/examples/jsm/effects/AsciiEffect.js">three.js examples</a>. This version is way more performant when using colors and also supports colors based on the brightness of pixels. Licensed under the MIT License, anyone is free to use and modify this effect to their liking. A demo is available <a className='highlighted' href="/portfolio/ascii-effect">here</a>.</p>},
      
    ]);
  }, []);

  useEffect(() => {
    if(disableSwitching === true) {
      setTimeout(() => {
        setShowContent(true);
      }, 300);
      setTimeout(() => {
        setAnimateContent(true);
      }, 400);
    } else {
      setAnimateContent(false);
      setTimeout(() => {
        setShowContent(false);
      }, 400);
    }
  }, [disableSwitching]);

  useEffect(() => {
    if(!ref.current || !embla) return;

    function outputSize() {
      embla.reInit();
    }
    
    new ResizeObserver(outputSize).observe(ref.current);
  }, [embla, ref.current]);

  return (
    <>
      <div 
        className={`top-2 rounded-full bg-black bg-opacity-50 p-1 z-20 border border-transparent hover:border-white w-10 h-10 right-2 ${disableSwitching ? "absolute" : "hidden"}`}
        onClick={() => {
          setAnimateContent(false);
          setTimeout(() => {
            setShowContent(false);
            onClose();
          }, 400);
        }}
      >
        <CloseIcon className={`cursor-pointer`} />
      </div>
      <Carousel 
        mx="auto" 
        withControls={!disableSwitching}
        draggable={false}
        controlsOffset={4}
        className=''
        ref={ref}
        getEmblaApi={setEmbla}
        styles={{
          control: {
            '&[data-inactive]': {
              opacity: 0,
              cursor: 'default',
            },
          },
        }}
      >
        {slides.map((slide, index) => {
          return (
            <Carousel.Slide key={index} className={`carousel-slide ${disableSwitching && "enlarged"}`} onClick={() => onClick()}>
              <img src={slide.img} className='h-full absolute mx-auto z-10 opacity-10 scale-[0.6] object-cover max-w-fit select-none' />
              <span className={`z-20 text-xl transition-all duration-300 ease-in-out ${disableSwitching ? "opacity-0" : "opacity-100"} ${showContent && "hidden"}`}>
                {slide.name}
              </span>
              <div className={`w-full z-20 block h-full transition-all duration-300 p-2 ease-in-out ${showContent ? "relative" : "hidden"} ${animateContent ? "opacity-100" : "opacity-0"}`}>
                <Header type={'h2'} mt={false}>{slide.name}</Header>
                {slide.content}
              </div>
            </Carousel.Slide>
          )
        })}
      </Carousel>
    </>
  )
}