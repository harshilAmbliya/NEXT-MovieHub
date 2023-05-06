'use client'
import React, { useState } from 'react'

function Contact() {
  const [user,setUser] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handlesubmit = () =>{

  }

  const handlechange =(event) =>{
    setUser({
    ...user,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
           
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.523823100947!2d72.84669397395874!3d21.21106708149455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04efc8e735955%3A0xb5851d83879b234!2sKohinoor%20Rd%2C%20Mini%20Bazar%2C%20Varachha%2C%20Kodiyar%20Nagar%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1683363333498!5m2!1sen!2sin" width="100%" height="100%" className="absolute inset-0"  title="map"  style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">47.kohinur Society , Mini bazar , Vrachha road ,surat - 395006</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-indigo-500 leading-relaxed">harshilambliya15@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">+91 79847 87422</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Send Feedback for imporve our services.</p>
           <form action=" " onSubmit={handlesubmit}> 
           <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" value={user.name} onChange={handlechange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" value={user.email} onChange={handlechange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" value={user.message} onChange={handlechange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
            </div>
            <button className="text-white bg-indigo-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit Message</button>
           </form>
         
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact