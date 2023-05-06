// import React from 'react'
// import Image from 'next/image';
// import Link from 'next/link';
// const Movie =  () => {
//   const url =' https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'e7cdcc3d88msh69b2090cd8bb27ep1eef29jsn419acf0497dc',
//       'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//     }
//   };
//   const getdata = async (url, options) => { 
//     try {
//       const res = await fetch(url, options);
//       const data = await res.json();
//       const moviedata = data.titles;
//       console.log(moviedata);
//       return moviedata;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//  getdata(url, options);
//   return (
//     <div>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-wrap -m-4">
//             {
//               getdata.map((movie) =>  {
//                 if (!movie.jawSummary) return null;
//                 const { title , id ,backgroundImage ,synopsis,type} = movie.jawSummary|| {};
//                 return (
//                   <div key={id} className="lg:w-1/3 xl:w-1/4  md:w-1/2 p-4 w-full">
//                     <div className="block relative h-48 rounded overflow-hidden">
//                       <Image alt="ecommerce" width={300} height={400} className="object-cover object-top w-full  block" src={backgroundImage.url} />
//                     </div>
//                     <div className="mt-4 text-center">
//                       <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
//                       <h2 className="text-gray-900 title-font text-lg font-medium">{`${synopsis.slice(0, 66)}...`}</h2>
//                       <p className="mt-1">{`NetFlix - ${type}`}</p>
//                     </div>
                   
//                     <Link href={`/movie/${id}`} className='flex justify-center items-center my-2'> <button className="inline-flex  text-white bg-indigo-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button></Link>
//                   </div>
//                 )
//               })
//             }

//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Movie
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Movie = () => {
  const [moviedata, setMoviedata] = useState([]);

  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e7cdcc3d88msh69b2090cd8bb27ep1eef29jsn419acf0497dc',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const getdata = async (url, options) => {
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        const moviedata = data.titles;
        setMoviedata(moviedata);
      } catch (error) {
        console.log(error);
      }
    };

    getdata(url, options);
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {moviedata.map((movie) => {
              if (!movie.jawSummary) return null;
              const { title, id, backgroundImage, synopsis, type } = movie.jawSummary || {};
              return (
                <div key={id} className="lg:w-1/3 xl:w-1/4  md:w-1/2 p-4 w-full">
                  <div className="block relative h-48 rounded overflow-hidden">
                    <Image alt="ecommerce" width={300} height={400} className="object-cover object-top w-full  block" src={backgroundImage.url} />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{`${synopsis.slice(0, 66)}...`}</h2>
                    <p className="mt-1">{`NetFlix - ${type}`}</p>
                  </div>
                  <Link href={`/movie/${id}`} className="flex justify-center items-center my-2">
                    <button className="inline-flex  text-white bg-indigo-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        </section>
        </div>
  )};
  export default Movie;
