import React from 'react'
import './App.css'
export default function App() {
  const [dark, setDark] = React.useState(false)
  const [menu, setMenu] = React.useState(false)

  function handleClick(){
    setDark(prev => !prev)
  }
  function toggleMenu(){
    setMenu(prev => !prev)
  }

  return (
    <>
      <header className=''>
        <nav className='flex items-center justify-between px-4 md:px-14 pt-6 md:pt-10'>
          <div className='text-xl'>
            <a href="" className='font-semibold uppercase  hover:text-slate-700
            '>
              Academie 
              <span className='text-sky-400'> Dela </span>
              Salle
            </a>
          </div>
          <div className={`lg:flex ${menu ? "menu" : "hidden"}`}>
            <ul className='lg:flex gap-x-8 font-semibold text-md '>
              <li>
                <a href="" className='hover:text-sky-500 leading-6'>Home</a>
              </li>
              <li>
               <a href="" 
                className='hover:text-sky-500 leading-6'>About Us</a>
              </li>
              <li>
               <a href="" 
                className='hover:text-sky-500 leading-6'>Academics</a>
              </li>
              <li>
               <a href="" 
                className='hover:text-sky-500 leading-6'>Admission</a>
              </li>
              <li>
               <a href="" 
                className='hover:text-sky-500 leading-6'>Gallery</a>
              </li>
              <li>
               <a href="" 
                className='hover:text-sky-500 leading-6'>Contact Us</a>
              </li>
              
            </ul>
          </div>
          <div className='flex items-center border-l border-slate-200 ml-6 pl-6 gap-x-2'>
            <div className={`${dark ? "hidden" : ""}`}>
              <span>
                <span href="" onClick={handleClick}>
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-sky-400/20 stroke-sky-500"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-sky-500"></path>
                </svg>
                </span>

              </span>

            </div>
            <div className={`${dark ? "" : "hidden"}`}>
              <span href="" onClick={handleClick}>
                <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
                </svg>
              </span>


            </div>
            <div className='group relative'>
              <span>
              <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="fill-sky-400/20 stroke-sky-500" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
              </svg>

              </span>
              <span className='hidden absolute right-7 pt-5  group-hover:flex'>
                <span className='border-r-2 px-2 text-sky-400 font-semibold'>Gicumbi</span>
                <span className='px-2 text-sky-400 font-semibold'>Byumba</span>
              </span>
            </div>
            <div>
              <span className='lg:hidden' onClick={toggleMenu}>
              <svg className="w-8 h-8 text-sky-400 hover:scale-105 cursor-pointer hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
              </svg>

              </span>
            </div>
          </div>
        </nav>

        <div className={`hero flex flex-col justify-center items-center mx-auto pt-32 md:pt-48 px-4 md:px-14 ${menu ? "mt-52" : ""}`}>
          <div>
            <p className='mx-auto max-w-5xl text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 text-center'>
              Academie
              <span className='text-sky-400'> school of excellence </span>
              and values
            </p>
          </div>
          <div className='max-w-3xl'>
            <p className='mx-auto my-6 text-2xl tracking-tight text-slate-700 text-center'>
            Welcome to place where learning transform lives. joins us in shaping a brighter future
            <span className='text-blue-400 font-semibold'> together.</span> 🖐️
            </p>
          </div>
          <div className='flex gap-x-12 pt-20 md:pt-14'>
            <button>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">Learn more 
              <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
            </button>

            <button>
            <a href="#" class="inline-flex gap-2 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">
              <svg class="w-6 h-6 text-gray-800 hover:text-blue-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
                </svg>
                Babyeyi
              </a>
            </button>
          </div>
        </div>
      </header>
      <main>
        {/* values */}
        <section className='values px-5 md:px-12 lg:pt-10 py-40 '>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-10 items-center'>

            <div className='card px-4 py-10 lg:mt-0 hover:scale-95'>

              <div class="text-5xl mb-1 mt-6">🚀</div>
              <h4 className='py-4 font-bold'>Be More Productive</h4>
              
              <p className='text-center pb-10 pt-6 font-medium leading-8'>
                How to execute efficiently, amke time for what matters and have fun along the way.
              </p>
            </div>
            <div className='card px-4 py-10 lg:mt-28 hover:scale-95'>

              <div class="text-5xl mb-1 mt-6">💡</div>
              <h4 className='py-4 font-bold'>Be More Productive</h4>
              
              <p className='text-center pb-10 pt-6 font-medium leading-8'>
                How to execute efficiently, amke time for what matters and have fun along the way.
              </p>
            </div>
            <div className='card px-4 py-10 lg:mt-3 hover:scale-95'>

              <div class="text-5xl mb-1 mt-6">📚</div>
              <h4 className='py-4 font-bold'>Be More Productive</h4>
              
              <p className='text-center pb-10 pt-6 font-medium leading-8'>
                How to execute efficiently, amke time for what matters and have fun along the way.
              </p>
            </div>
            <div className='card px-4 py-10 lg:mt-56 hover:scale-95'>

              <div class="text-5xl mb-1 mt-6">🗝️</div>
              <h4 className='py-4 font-bold'>Be More Productive</h4>
              
              <p className='text-center pb-10 pt-6 font-medium leading-8'>
                How to execute efficiently, amke time for what matters and have fun along the way.
              </p>
            </div>
          </div>

        </section>
        {/* about */}
        <section className='px-4 md:px-14  pb-20'>
          <div className='flex flex-col items-center   justify-center'>
              <p className='text-lg text-gray-500 '>
                Unique
                </p>
              <h2 className='font-bold text-4xl lg:w-1/2 text-center pt-4'>
                More about Our home
              </h2>
              <p className='pt-4 text-center w-[70vw] text-balance text-slate-600 '>
              It's place where learning transform lives. joins us in shaping a brighter future together.
              </p>
          </div>
          <div className='flex  flex-col-reverse lg:flex-row pt-20 gap-x-16 gap-y-10'>
            <div className='lg:w-1/2'>
              <p className='font-medium text-gray-700 leading-8 text-lg'>
              Academy De La Salle, founded by Saint Jean-Baptiste de La Salle and established by the La Sallian Brothers, is dedicated to fostering the values of Faith, Brotherhood, and Quality. Since its inception, the Academy has committed itself to nurturing students through a holistic approach that emphasizes spiritual growth, a sense of community, and educational excellence. By integrating these core values into its teaching and school culture, the Academy prepares students to excel both academically and personally, embodying the enduring principles and vision of its founder.
              </p>
            </div>
            <div className='lg:w-1/2'>
              <img src="https://images.stockcake.com/public/5/7/5/5752206f-69c1-433f-95bf-645e7ece243c_large/colorful-science-lab-stockcake.jpg" alt=""  className='rounded-md'/>
            </div>
          </div>
        </section>
        {/* programs */}
        <section className='px-4 md:px-14 pt-10 pb-20'>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-lg text-gray-500 '>
                Excellence
                </p>
              <h2 className='font-bold text-4xl lg:w-1/2 text-center pt-4'>
                Discover Our Unique Educational Programs
              </h2>
              <p className='pt-4 text-center lg:w-[70vw] md:text-balance text-slate-600 '>
                Our school offers a variety of innovative programs designed to foster creativity and critical thinking. We are commited to nurturing well-rounded individuals who excel academically and socially.
              </p>
            </div>
            <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-20'>
              <div className='py-4 md:px-4'>
                <div className=''>
                  <img src="https://images.stockcake.com/public/b/6/b/b6b7e616-0483-4344-9fae-2f89e0ba3a4f_large/teddy-among-books-stockcake.jpg" alt="" className='rounded-lg lg:h-[11.5rem] w-full' />
                </div>
                <div>
                  <h3 className='font-medium text-xl text-center pt-4'>
                    Community Involvement and Engagement
                  </h3>
                  <p className='text-center pt-2 text-md'>We actively participate in community services projects that enrich our student's learning experiences.</p>
                </div>
              </div>
              <div className='py-4 md:px-4'>
                <div className=''>
                  <img src="https://images.stockcake.com/public/b/0/9/b098bdf5-39e2-4d83-b115-2b5d0e96ad2a_large/geometric-shapes-collection-stockcake.jpg" alt="" className='rounded-lg  lg:h-[11.5rem] w-full' />
                </div>
                <div>
                  <h3 className='font-medium text-xl text-center pt-4'>
                    Community Involvement and Engagement
                  </h3>
                  <p className='text-center pt-2 text-md'>We actively participate in community services projects that enrich our student's learning experiences.</p>
                </div>
              </div>
              <div className='py-4 md:px-4'>
                <div className=''>
                  <img src="https://images.stockcake.com/public/0/8/b/08bd7c3a-e795-4736-a176-5b5c74ae95fa_large/study-time-essentials-stockcake.jpg" alt="" className='rounded-lg lg:h-[11.5rem] h-[18rem] w-full' />
                </div>
                <div>
                  <h3 className='font-medium text-xl text-center pt-4'>
                    Community Involvement and Engagement
                  </h3>
                  <p className='text-center pt-2 text-md'>We actively participate in community services projects that enrich our student's learning experiences.</p>
                </div>
              </div>
            </div>
            </div>
            
          </div>
        </section>
        {/* Testimonials */}
        <section className='px-4 md:px-14 pt-10 pb-20 p-'>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center'>
              
              <h2 className='font-bold text-2xl md:text-4xl lg:w-1/2 text-center pt-4'>
                Trasformative Education Experience
              </h2>
              <p className='pt-4 text-center lg:w-[70vw] text-balance text-slate-600 '>
                Hear from our students and Parents on the imapct of our school community.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-20'>
              <div className='bg-slate-50 shadow-2xl px-5 py-8 rounded-xl min-h-5 hover:transition-opacity hover:opacity-70'>
                <div className='flex gap-4'>
                  <img src="https://images.stockcake.com/public/2/8/8/288e7709-3abf-4d06-bd17-eb681cf9ac51_large/joyful-emoji-ball-stockcake.jpg" alt="" className='h-14 rounded-full object-cover' />
                  <p className='flex flex-col text-base text-slate-900'>
                    <span className='font-semibold'>Ryan Florence</span>
                    <span className='mt-0.5'>Remix & React Training</span>
                  </p>
                </div>
                <div className='mt-6 text-slate-700'>
                  <p>
                  This school has truly become a second home for my child. The supportive community and dedicated teachers make learning an enjoyable experience!
                  </p>
                </div>
              </div>
              <div className='bg-slate-50 shadow-2xl px-5 py-8 rounded-xl hover:transition-opacity hover:opacity-70'>
                <div className='flex gap-4'>
                  <img src="https://images.stockcake.com/public/2/8/8/288e7709-3abf-4d06-bd17-eb681cf9ac51_large/joyful-emoji-ball-stockcake.jpg" alt="" className='h-14 rounded-full object-cover' />
                  <p className='flex flex-col text-base text-slate-900'>
                    <span className='font-semibold'>Ryan Florence</span>
                    <span className='mt-0.5'>Remix & React Training</span>
                  </p>
                </div>
                <div className='mt-6 text-slate-700'>
                  <p>
                  This school has truly become a second home for my child. The supportive community and dedicated teachers make learning an enjoyable experience!
                  </p>
                </div>
              </div>
              <div className='bg-slate-50 shadow-2xl px-5 py-8 rounded-xl hover:transition-opacity hover:opacity-70 md:col-span-2 lg:col-span-1'>
                <div className='flex gap-4'>
                  <img src="https://images.stockcake.com/public/2/8/8/288e7709-3abf-4d06-bd17-eb681cf9ac51_large/joyful-emoji-ball-stockcake.jpg" alt="" className='h-14 rounded-full object-cover' />
                  <p className='flex flex-col text-base text-slate-900'>
                    <span className='font-semibold'>Ryan Florence</span>
                    <span className='mt-0.5'>Remix & React Training</span>
                  </p>
                </div>
                <div className='mt-6 text-slate-700'>
                  <p>
                  This school has truly become a second home for my child. The supportive community and dedicated teachers make learning an enjoyable experience!
                  </p>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6'>
              <div className='bg-slate-50 shadow-2xl px-5 py-8 rounded-xl hover:transition-opacity hover:opacity-70'>
                <div className='flex gap-4'>
                  <img src="https://images.stockcake.com/public/2/8/8/288e7709-3abf-4d06-bd17-eb681cf9ac51_large/joyful-emoji-ball-stockcake.jpg" alt="" className='h-14 rounded-full object-cover' />
                  <p className='flex flex-col text-base text-slate-900'>
                    <span className='font-semibold'>Ryan Florence</span>
                    <span className='mt-0.5'>Remix & React Training</span>
                  </p>
                </div>
                <div className='mt-6 text-slate-700'>
                  <p>
                  This school has truly become a second home for my child. The supportive community and dedicated teachers make learning an enjoyable experience!
                  </p>
                </div>
              </div>
              <div className='bg-slate-50 shadow-2xl px-5 py-8 rounded-xl hover:transition-opacity hover:opacity-70'>
                <div className='flex gap-4'>
                  <img src="https://images.stockcake.com/public/2/8/8/288e7709-3abf-4d06-bd17-eb681cf9ac51_large/joyful-emoji-ball-stockcake.jpg" alt="" className='h-14 rounded-full object-cover' />
                  <p className='flex flex-col text-base text-slate-900'>
                    <span className='font-semibold'>Ryan Florence</span>
                    <span className='mt-0.5'>Remix & React Training</span>
                  </p>
                </div>
                <div className='mt-6 text-slate-700'>
                  <p>
                  This school has truly become a second home for my child. The supportive community and dedicated teachers make learning an enjoyable experience!
                  </p>
                </div>
              </div>
              <div className='bg-slate-50 shadow-2xl px-5 py-8 rounded-xl hover:transition-opacity hover:opacity-70 md:col-span-2 lg:col-span-1'>
                <div className='flex gap-4'>
                  <img src="https://images.stockcake.com/public/2/8/8/288e7709-3abf-4d06-bd17-eb681cf9ac51_large/joyful-emoji-ball-stockcake.jpg" alt="" className='h-14 rounded-full object-cover' />
                  <p className='flex flex-col text-base text-slate-900'>
                    <span className='font-semibold'>Ryan Florence</span>
                    <span className='mt-0.5'>Remix & React Training</span>
                  </p>
                </div>
                <div className='mt-6 text-slate-700'>
                  <p>
                  This school has truly become a second home for my child. The supportive community and dedicated teachers make learning an enjoyable experience!
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        {/* principal */}
        <section className='px-4 md:px-14 pt-16 pb-20'>
          <div className='flex flex-col items-center   justify-center pb-16'>
              <p>📢</p>
              <p className='text-lg text-gray-500 '>
                Principal Message
              </p>
            </div>
          <div className='relative'>
            <figure className="md:flex lg:bg-slate-50 hover:bg-slate-100 shadow-xl rounded-xl p-8 md:p-0">
              
              <img className="md:w-48 md:h-auto md:rounded-none  rounded-md w-full h-56 object-cover mx-auto" src="https://images.stockcake.com/public/3/6/9/3692a82b-6994-40d9-ba3a-c64080c60af6_large/man-holding-microphone-stockcake.jpg" alt="" width="384" height="512" />

              <div class="pt-6 md:p-8  md:text-left space-y-4">
                <blockquote>
                  <p class="text-lg font-medium">
                    “Today, I want to take a moment to celebrate our incredible school community. Each one of you students, teachers, and parents plays a vital role in making our school a special place. As we embark on this new academic year, let's remember the values that bind us: respect, curiosity, and perseverance. These qualities not only help us achieve academic success but also foster friendships and a supportive environment. I encourage each student to take advantage of the opportunities available—whether in academics, sports, or the arts. Together, let's create a culture of encouragement and collaboration, where everyone feels valued and inspired. Thank you for being a part of our school family. Let's make this year our best one yet!”
                  </p>
                </blockquote>
                <figcaption class="font-medium">
                  <div class="text-sky-500 ">
                    Mugabo david
                  </div>
                  <div class="text-slate-700 ">
                    Principal, Academie dls
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>

        </section>
        
        {/* questions */}
        <section className='px-4 md:px-14 pt-20 pb-24'>
          <div className='flex flex-wrap lg:flex-nowrap justify-between gap-x-7 gap-y-16'>
            <div className='md:w-[90%] sm:w-full'>
              <p className='text-base font-semibold text-indigo-500'>
                Frequently asked questions 🙋🏽
              </p>
              <h2 className='mt-4 text-4xl font-extrabold tracking-tight text-slate-900  xl:text-4xl xl:leading-[3.5rem]'>
                Your guide to our School Community
                </h2>
            </div>
            <div className='min-w-[50%] sm:w-full'>
              <h2 className=' text-sm font-semibold leading-7 text-slate-400'>General</h2>

              <dl className="mt-2 divide-y divide-slate-100 ">

                <details className='group py-4 marker:content-[&#39;&#39;]'>
                  <summary className='flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden'>
                    What does “lifetime access” mean exactly ❔

                    <svg
                        class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700  group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                    </svg>
                  </summary>
                  <div>
                    <p>
                    one-time purchase, with no recurring
                    subscription When you purchase all-access, you get access to
                    everything in Tailwind UI forever.
                    </p>
                  </div>
                </details>

                <details className='group py-4 marker:content-[&#39;&#39;]'>
                  <summary className='flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden'>
                    What does “lifetime access” mean exactly ❔

                    <svg
                        class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700  group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                    </svg>
                  </summary>
                  <div>
                    <p>
                    one-time purchase, with no recurring
                    subscription When you purchase all-access, you get access to
                    everything in Tailwind UI forever.
                    </p>
                  </div>
                </details>

                <details className='group py-4 marker:content-[&#39;&#39;]'>
                  <summary className='flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden'>
                    What does “lifetime access” mean exactly ❔

                    <svg
                        class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700  group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                    </svg>
                  </summary>
                  <div>
                    <p>
                    one-time purchase, with no recurring
                    subscription When you purchase all-access, you get access to
                    everything in Tailwind UI forever.
                    </p>
                  </div>
                </details>

                <details className='group py-4 marker:content-[&#39;&#39;]'>
                  <summary className='flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden'>
                    What does “lifetime access” mean exactly ❔

                    <svg
                        class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700  group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                    </svg>
                  </summary>
                  <div>
                    <p>
                    one-time purchase, with no recurring
                    subscription When you purchase all-access, you get access to
                    everything in Tailwind UI forever.
                    </p>
                  </div>
                </details>
              </dl>
              
            </div>
          </div>
        </section>

        {/* newsletter */}
        <section className='px-4 md:px-14 pt-10'>
          <div className='flex flex-wrap lg:flex-nowrap gap-10 pb-20'>
            <div className='lg:w-1/2 sm:w-full'>
              <h2 class="mb-6 font-bold text-3xl text-gray-800">
                💌 Subscribe to Adls news
              </h2> 
              <p className='pb-4 text-xl text-slate-800'>
              "Your emails brighten our day and keep our community connected!"
              </p> 
              <p className='text-md leading-7 text-gray-700 text-xl'>Join a vibrant community of over 300,000 engaged readers! Each week, we share important updates and valuable resources to support our students and families. Sign up to receive news, events, and practical tips straight to your inbox.

</p>
            </div>
            <div className='lg:w-1/2 pt-10 sm:w-full'>
              <div className='ring-1 ring-gray-400 p-2 rounded-md'>
                <label htmlFor="name"></label>
                <input type="text" placeholder='First Name'/>
              </div>
              <div className='my-4 ring-1 ring-gray-400 p-2 rounded-md'>
                <label htmlFor="email"></label>
                <input type="text" placeholder='Email*'/>
              </div>
              <div>
                <p className='text-gray-600 leading-5'>
                  By signing up, you'll receive communications from Academie. for more information, see our 
                  <a href="" className='text-sky-400 underline px-1'> contact info</a>.
                </p>
              </div>
              <div className='mt-6 bg-sky-400 p-2 flex justify-center items-center rounded-sm'>
                <button className='text-white uppercase font-semibold text-xl'>Subscribe</button>
              </div>
              
            </div>
          </div>
        </section>
        
      </main>

      <footer className="bg-gray-100 px-4 md:px-14 pt-10 mt-2 text-white ">

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-10 pb-9">
              
        <div className="pt-5">
          <h5 className="font-semibold uppercase tracking-tight pb-3
                  text-gray-900 ">
            Academie DLS
          </h5>
          <p className="text-balance font-normal leading-5 text-gray-600">
            "Providing inclusive and wholistic education grounded
            in christian values enabling our student to be good
            christians and good citizens"
          </p>
        </div>

        <div className="pt-5">
          <h5 className="font-semibold uppercase text-gray-900 tracking-tight pb-3">
              Quick Links
          </h5>

          <ul className="w-20">
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                <a href="index.html" class=" tracking-tight text-sm">Home</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                <a href="school.html" class=" tracking-tight text-sm">About us</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                <a href="new.html" class=" tracking-tight text-sm">Academics</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-2">
                <a href="contact.html" class=" tracking-tight text-sm">Admission</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-2">
                <a href="contact.html" class=" tracking-tight text-sm">Gallery</a>
            </li>
          </ul>
        </div>

        <div className="pt-5">
          <h5 class="font-semibold uppercase text-gray-900 tracking-tight pb-3">
              Resources
          </h5>

          <ul className="w-40">
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                <a href="index.html" class=" tracking-tight text-sm">Student Life</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                <a href="school.html" class=" tracking-tight text-sm">Events Calendar</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                <a href="new.html" class=" tracking-tight text-sm">News Updates</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-2">
                <a href="contact.html" class=" tracking-tight text-sm">School Guidelines</a>
            </li>    
          </ul>
        </div>

        <div className="pt-5">
          <h5 className="font-semibold uppercase text-gray-900  tracking-tight pb-3">
              Support
          </h5>
          <ul className="w-40">
            <li className="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                          <a href="" target="_blank"  
                          className=" tracking-tight text-sm"
                          >Help & FAQs</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                          <a href="" target="_blank" 
                          class=" tracking-tight text-sm"
                          >Contact us</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1">
                          <a href="#" target="_blank" 
                          class=" tracking-tight text-sm"
                          >Refunds</a>
            </li>
            <li class="font-normal text-gray-800  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-2">
                          <a href="" target="_blank" 
                          class=" tracking-tight text-sm"
                          >Platform Status</a>
            </li>
          </ul>                 
        </div>

        <div className="pt-5">
                  <h5 class="font-semibold uppercase text-gray-900 tracking-tight pb-3">
                      OPEN HOURS
                  </h5>
                  <div>
                      <p class="text-balance text-gray-600  font-normal leading-5 pb-5">
                          Our support available to help you 24 hours a day, seven days a week.
                      </p>
                  </div>
                  <ul class="list-unstyled text-gray-800  ">
                      <li class="pb-1 font-extralight tracking-tight text-sm">
                          Monday-Friday: <span>8am to 5pm</span>
                      </li>
                      <li class="pb-1 font-extralight tracking-tight text-sm">
                          Saturday: <span>10am to 3pm</span>
                      </li>
                      <li class="pb-1 font-extralight tracking-tight text-sm">
                          Sunday: <span>Closed</span>
                      </li>
                  </ul>
                  

        </div>
   
      </div>
      <hr className="border border-slate-500 mt-4"/>

      <div className="flex md:justify-end mt-6 gap-4">

       <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center">
        <svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
        </svg>
        
       </div>

       <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center">
        <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
          <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
        </svg>
        
       </div>

       <div class="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center">
        <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
        </svg>
        
       </div>

       <div class="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center">
        <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
        </svg>
        
       </div>

       <div class="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center">
        <svg class="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
        </svg>
        
       </div>

      </div>

      <div className="flex justify-center items-center pt-5">
        <p className="mt-4 text-base text-gray-500 ">
          © adls.edu, academie dela salle</p>
      </div>
      
      </footer>
    </>

  )
}