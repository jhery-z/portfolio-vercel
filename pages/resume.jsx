import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Jhery | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Jhery</h2>
          <div className='flex'>
            <a
              href='https://id.linkedin.com/in/jhery-heriyanto-444a76125/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/jhery-z'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span><br/>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Laravel
          </p>
          <p className='py-2'>
            <span className='font-bold'>Node JS</span>
            <span className='px-2'>|</span>MySQL
            <span className='px-2'>|</span>Mongo          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              BATRISYIA HERBAL INDONESIA
            </span>
            <span className='px-2'>|</span>BANTEN, INDONESIA
          </p>
          <p className='py-1 italic'>Web Developer (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Preparation, doing some meeting, make To Do list of project build planning issues and concerns, configure operation and analytic
              plugins, and design user interface as needed.
            </li>
            <li>
              Worked directly with a team and
              implement multiple technologies and programs.
            </li>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>SAKURAKITA WISATA INDONESIA</span>
            <span className='px-2'>|</span>BANTEN, INDONESIA
          </p>
          <p className='py-1 italic'>Web Developer (2018 - 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Lead team in Indonesia team and daily monitoring server, maintenance and update data products.
            </li>
            <li>
              Work surrounding departments organizing treatment protocols and
              facilitate hands on training operations.
            </li>
            <li>
              Manage and documentations a digital company aset
            </li>
            <li>
              Doing some testing and Bugs fixing before publish.
            </li>
            <li>
              Evaluate and make a changes update version.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>PT. RAJAWALI CITRA TELEVISI INDONESIA (RCTI)</span>
            <span className='px-2'>|</span>JAKARTA, INDONESIA
          </p>
          <p className='py-1 italic'>Camera Person Jurnalist (2014 – 2017)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Make report of news topic and
              broadcasting in studio and maintenance.
            </li>
            <li>
              Daily report news segmen, operation, and broadcasting news live in studio, and
              response situastion.
            </li>
            <li>
              Collaborated with a deferen departement and high performing team as a needed.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
