import React from 'react'
import Image from 'next/image';
const MovieData = async ({ params }) => {
    const id = params.id
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e7cdcc3d88msh69b2090cd8bb27ep1eef29jsn419acf0497dc',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options);
    const data = await res.json();
    if (data.length === 0) {
        return <div>No movie found</div>;
      }
    const moviedata = data[0].details;
   
    
    return (
        <div>
            {
                       !moviedata ?  <div>No details found for this movie</div>
                       : <section className="text-gray-600 body-font">
                            <div className="container mx-auto flex px-5 py-5  flex-col items-center">
                           
                                <div className="lg:max-w-lg lg:w-full md:w-full w-5/6  ">
                                    
                                    <Image className="object-cover object-center rounded " alt="hero" src={moviedata.backgroundImage.url} width={515} height={300} />
                                </div>
                                <div className="lg:flex-grow  md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                                <p className='text-3xl my-3 md:text-5xl md:my-5'>{`NetFlix - ${moviedata.type}`}</p>
                                    <h3 className="title-font sm:text-4xl md:text-3xl md:my-3 text-2xl mb-4 font-medium text-gray-900">{moviedata.title}
                                    </h3>
                                    <p className="mb-8 leading-relaxed">{moviedata.synopsis}.</p>

                                </div>
                            </div>
                        </section>
            }
        </div>
    )
}

export default MovieData