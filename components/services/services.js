import { forwardRef } from "react";

export default function Services() {
  return (
    <section data-aos="fade-up" className="w-[95%] ms-10 mt-5 p-10 rounded-lg bg-slate-700 text-teal-100 font-BTitrBd" aria-labelledby="services-title">
      <h2 data-aos="fade-up" className="h1  text-[2rem] text-center p-5 mb-5" id="services-title">
        ارائه خدمات تعمیرات خودروهای داخلی و خارجی
      </h2>
      <ul  className="ulCont flex flex-wrap justify-around align-middle  " role="list">
        {[
          {  title: "تعمیرات موتور"   },
          {  title: "تعمیرات گیربکس" },
          {  title: "تراش دیسک روکار" },
          {  title: "تعمیرات زیر و بند" },
          {  title: "تعمیرات جعبه فرمان" },
          { title: "تعمیرات پلوس و اکسل" },
        ].map((service, index) => (
          <li data-aos="zoom-out" className="boxServ" key={index} aria-label={service.title}>
            <img className={service.icon}></img>
            <h3>{service.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
