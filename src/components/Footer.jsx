import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2 '>
                <h1 className='text-[11rem] font-semibold leading-tight tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-2'>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500'>Socials</h4>
                    {["Instagram","Twitter (x?)","LinkdIn"].map((item, index)=> <a key={index} className='block mt-2 text-zinc-600'>{item}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500'>Sitemap</h4>
                    {["Home","Work","Career","Contact"].map((item, index)=> <a key={index} className='block mt-2 font-semibold text-zinc-400'>{item}</a>)}
                </div>
                <div className='basis-1/2 mt-10 flex flex-col items-end'>
                    <p>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                    <button className='bg-blue-800 px-3 py-2 mr-4 mt-6'><i>W  </i>Enterprise Partner</button>
                </div>
            </div>
        </div>
                <div className='max-w-screen-xl mx-auto flex gap-10 pb-5'> 
                    {["Privacy Policy","Cookie Privacy","Impressum","Terms"].map((item,index)=> <a key={index} className='text-zinc-500'>{item}</a>)}  
                </div>
    </div>
  )
}

export default Footer