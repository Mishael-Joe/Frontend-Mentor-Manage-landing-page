import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Anisha from '../assets/avatar-anisha.png'
import Ali from '../assets/avatar-ali.png'
import Richard from '../assets/avatar-richard.png'
import Shanai from '../assets/avatar-shanai.png'

const Review = () => {
  return (
    <section className=' py-4 px-5 flex flex-col justify-center items-center gap-5 overflow-x-hidden'>
        <h1 className='opacity-90 text-3xl font-bold text-center pb-16'>What they’ve said</h1>
        
        <Splide 
          options={ {
            rewind: true,
            rewindSpeed: 2000,
            rewindByDrag: true,
            focus  : 'center',
            arrows:  false,
            type: 'loop',
            autoplay: 'play',
            speed: 1000,
            interval: 5000,
            width : 1200,
            gap   : '1rem',
            perPage: 3,
            perMove: 1,
            breakpoints: {
              850: {
                perPage: 2,
                // width: 700,
              },
              740: {
                // width: 500,
              },
              470: {
                perPage: 1,
                width: 300,
              }
            },
            classes: {
              // Add classes for pagination.
              pagination: 'splide__pagination your-class-pagination', // container
              page      : 'splide__pagination__page', // each button
            },
          } }
        aria-label="Reviews from Users">

          <SplideSlide>
            <div  className='flex items-center justify-center text-center bg-transparent -mb-12'>
              <img src={Anisha} width={'100px'} height={'100px'} alt="Image 1"/>
            </div>

            <div className='text-center flex flex-col gap-6 items-center pt-24 bg-Very-Light-Gray pb-10 px-5 h-80 rounded'>
              <h2>Anisha Li</h2>
              <p>
                “Manage has supercharged our team’s workflow. The ability to maintain 
                visibility on larger milestones at all times keeps everyone motivated.”
              </p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div  className='flex items-center justify-center text-center bg-transparent -mb-12'>
              <img src={Ali} width={'100px'} height={'100px'} alt="Image 1"/>
            </div>

            <div className='text-center flex flex-col gap-6 items-center pt-24 bg-Very-Light-Gray pb-10 px-5 h-80 rounded'>
              <h2>Ali Bravo</h2>
              <p>
                “We have been able to cancel so many other subscriptions since using 
                Manage. There is no more cross-channel confusion and everyone is much 
                more focused.”
              </p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div  className='flex items-center justify-center text-center bg-transparent -mb-12'>
              <img src={Richard} width={'100px'} height={'100px'} alt="Image 1"/>
            </div>

            <div className='text-center flex flex-col gap-6 items-center pt-24 bg-Very-Light-Gray pb-10 px-5 h-80 rounded'>
              <h2>Richard Watts</h2>
              <p>
                “Manage allows us to provide structure and process. It keeps us organized 
                and focused. I can’t stop recommending them to everyone I talk to!”
              </p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div  className='flex items-center justify-center text-center bg-transparent -mb-12'>
              <img src={Shanai} width={'100px'} height={'100px'} alt="Image 1"/>
            </div>

            <div className='text-center flex flex-col gap-6 items-center pt-24 bg-Very-Light-Gray pb-10 px-5 h-80 rounded'>
              <h2>Shanai Gough</h2>
              <p>
                “Their software allows us to track, manage and collaborate on our projects 
                from anywhere. It keeps the whole team in-sync without being intrusive.”
              </p>
            </div>
          </SplideSlide>

        </Splide>

        <button className='mt-8 w-36 hover:shadow-Very-Pale-Red hover:shadow-xl'>
          Get Started
        </button>
    </section>
  )
}

export default Review