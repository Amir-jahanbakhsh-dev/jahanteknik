import React from 'react';
import Image from 'next/image';
const Art = (prop) => {
      return (
    <section className="flex justify-center">
      <div data-aos="fade-up" className="desc w-[95%] shadow-xl bg-slate-200 rounded-lg mt-10 pt-5 pb-5 p-3 mb-5 ">
        <div className=" col-12 col-lg-9">
          <div class="title flex justify-between">
            {prop.title}
          </div>
          <div className="flex flex-wrap justify-around ">
            <div data-aos="fade-right" className="pElem ps-5 text-base/8 pt-10 font-BNazanin  text-lg flex justify-around flex-wrap">
              {prop.desc}
            </div>
            <Image  data-aos="fade-left" src={prop.src} className="w-[20%] pb-10" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Art;
