import React from 'react'
import Logo from './Logo'
const AboutUs = () => {
  return (
   <div>
     <div className='bg-violet-600 h-screen flex items-center justify-center shadow-lg '>
     <div className='bg-white w-5/6 h-5/6 rounded-xl shadow-lg flex flex-col items-center pt-4'>
  <div className='bg-violet-600 w-40 text-xl text-center rounded-lg shadow-lg h-10'>
    <div className='text-white mt-2'>LOGO</div>
  </div>
  <div className='ml-3 mt-10 text-xl'>
    <p>
    At our voting app, we are committed to ensuring that every opinion matters and is accurately represented. We recognize the value of both small and large sampling techniques in understanding public sentiment. While smaller samples can provide quick insights and highlight initial trends, larger samples—such as our extensive engagement of around 20% to 40% participants of total population—offer a more comprehensive and reliable representation of the entire population's views.

By collecting data from a significant portion of the community, we greatly reduce the potential for bias and enhance the reliability of our findings. This rigorous approach allows us to capture a diverse range of perspectives, ensuring that our results reflect the true opinions of our users. Ultimately, our goal is to empower individuals to make informed decisions and foster a more robust democratic process. We invite you to be a part of this journey, as your voice is crucial in shaping the future!
    </p>
  </div>
</div>
      
    </div>

   <div className='flex space-x-60 h-60 text-violet-600 text-lg'>
    <div className='ml-32 mt-10'>Contact Us
       <ul className='text-black mt-5'>
        <li>+9189563XYZ95</li>
        <li>+919785BVF944</li>
        <li>+9198466MNY56</li>
       </ul>
    </div>
    <div className=' mt-10'>Help
    <p className="text-black mt-5">For assistance, please contact us at:</p>
    <a 
            href="mailto:support@example.com" 
            className="text-blue-400 hover:underline"
          >
            support@example.com
          </a>
    </div>
    <div className=' mt-10'>Follow Us
    <div className=" mt-5">
            <div><a href="https://facebook.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a></div>
            <div><a href="https://twitter.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a></div>
          <div>  <a href="https://instagram.com" className="text-pink-600 hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a></div>
          </div>
    </div>
    <div className=' mt-10'>Copyright Notice
    <p className='text-black'>&copy; 2024 Your Company Name. All Rights Reserved.</p>
    <p><a href="/privacy" className="hover:underline text-black">Privacy Policy</a> | <a href="/terms" className="hover:underline">Terms of Service</a></p>
    </div>
   </div>
   </div>
  
  )
}

export default AboutUs
