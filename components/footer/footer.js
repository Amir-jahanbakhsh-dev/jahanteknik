import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer class="footer w-[100%] bg-gray-400 text-black font-BTitrBd text-right p-5">
      <div class="w-[100%]">
        <div class="flex justify-around gap-5 pb-5 text-center align-middle flex-wrap space-x-3 space-y-5">
          <div class=" text-right w-[30%]">
            <h4>جهان تکنیک</h4>
            <p className="font-BNazanin font-bold">ما به عنوان خدمات پیشرو در اصفهان، اطمینان داریم که در وقت و هزینه شما صرفه جویی خواهیم کرد. بیش از هر چیز دیگری ، ما تلاش می کنیم یک تجربه برتر را ارائه دهیم</p>
          </div>
          <div class="col-md-3 me-5">
            <h4>مارا در نقشه ببینید</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209.81640570336845!2d51.60292477275423!3d32.71096712007458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc356b06500e4d%3A0x53daec9901e73d4!2z2YXaqdin2YbbjNqp24wg2Ygg2LLbjNix2YjYqNmG2K_Ys9in2LLbjCDYrNmH2KfZhiDYqtqp2YbbjNqp!5e0!3m2!1sen!2s!4v1758142399093!5m2!1sen!2s" width="300" height="300" ></iframe>
          </div>
          <Link className="block pt-12" id="rezerv" href="#rezerv" aria-label="رزرو">
          </Link>
          <div class="text-center space-y-5 mt-10">
            <h4> تماس با ما جهت ثبت نوبت</h4>
            <p>09935566903</p>
            <p>  09308716037</p>
            <Link href="https://www.instagram.com/mohamad_jahan_536/"><p className="font-BNazanin font-bold">@mohamad_jahan_536</p></Link>
          </div>
        </div>
        <hr className="container-fluid" />
        <div className="flex justify-around flex-wrap text-center   font-BMitra">
          <p>&#xa9; کلیه ی حقوق متعلق به جهان تکنیک</p>
          <span>جهت ثبت سفارش طراحی سایت خود به صورت اختصاصی  به پیج ما مراجعه کنید <Link className="text-blue-700" href='https://www.instagram.com/abolfazl_jahanbakhsh._.pv/'>پیج ما</Link></span>
        </div>
      </div>

    </footer>
  );
}
