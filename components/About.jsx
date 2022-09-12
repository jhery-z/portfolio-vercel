import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='uppercase tracking-widest text-[#5651e5]'>
            About
          </h2>
          {/* <h2 className='py-4'>Who I Am</h2> */}
          <h4 className='py-4'>
            My Job Experience
          </h4>
          <p className='py-2 text-gray-500'>
            I have spent the last 4 years in the fire service working as a
            Professional Developer. I have always had a knack for
            technology and working with computers. In 2014 I started working
            with HTML and CSS to make some user interface on a small business
            website that I was operating.           </p>
          <p className='py-2 text-gray-500'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the Shopify platform. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p>
          <Link href='https://www.batrisyiaherbal.co.id'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
