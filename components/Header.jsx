'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      <header className="text-gray-600 body-font bg-black">
        <div className="container mx-auto flex flex-wrap  p-5 flex-col sm:flex-row items-center">
          <Link href={'/'} className='w-full md:w-1/4'><span className=" text-xl  text-white flex title-font font-medium items-center justify-center mx-auto md:mb-0 sm:my-2">
            MovieHub</span></Link>
          <nav className="w-full md:w-2/4 sm:my-2 md:mx-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"}  className={`${path === '/' ? 'text-white' : ''} sm:mr-5 hover:text-white w-full sm:w-10  text-center my-1`} >Home</Link>
            <Link href={"/about"} className={`${path === '/about' ? ' text-white' : ''} sm:mr-5 w-full sm:w-10 hover:text-white   text-center my-1`}>About </Link>
            <Link href={"/movie"} className={`${path === '/movie' ? 'text-white' : ''} sm:mr-5 w-full sm:w-10 hover:text-white  text-center my-1`}>Movie</Link>
            <Link href={"/contact"} className={`${path === '/contact' ? 'text-white' : ''} sm:mr-5 w-full sm:w-10 hover:text-white  text-center my-1`}>Contact</Link>
          </nav>
          <Link href={'/log-in'} className='sm:w-full mx-auto md:w-1/4 sm:my-2 md:my-0 flex justify-center lg:justify-end items-center'>
          <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base  md:mt-0 text-white ">Log-In</button></Link>
        </div>
      </header>
    </div>
  )
}

export default Header