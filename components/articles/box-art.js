import React from 'react';
const BoxArt = (prop) => {
    let urlHref = '/articles/' + prop.link
    return (
        <div dir='rtl' className='p-5 w-[100%] m-5 bg-gray-100 rounded-md line-clamp-2 hover:shadow-xl  '>
            <h2 className='font-BTitrBd '>{prop.title}</h2>
            <div class="flex  ">

                <p className='mt-5 text-gray-600 font-BMitra me-10'>{prop.desc}</p>
                <a href={urlHref} className='mt-5 mb-5  p2 bg-teal-500 font-BTitrBd rounded-sm '>دیدن مطلب</a>
            </div>

        </div>
    );
}

export default BoxArt;
