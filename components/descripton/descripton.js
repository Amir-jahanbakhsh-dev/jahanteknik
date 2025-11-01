import Image from 'next/image';
import Link from 'next/link';
export default function Desc(prop) {
  return (
    <section className="flex justify-center">
      <div data-aos="fade-up" className="desc w-[95%] bg-slate-300 rounded-lg mt-10 pt-5 pb-5 p-3 mb-5 ">
        <div className=" col-12 col-lg-9">
          <h3 className="h1 text-center font-BTitrBd text-blue-500-800 text-3xl">{prop.title}</h3>
          <div className="flex flex-wrap justify-around ">
            <div data-aos="fade-right" className="pElem ps-5 text-base/8 pt-10 font-BNazanin  text-lg">
              {prop.desc}
            </div>
            <Image  data-aos="fade-left" src={prop.src} className="w-[20%] pb-10" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
