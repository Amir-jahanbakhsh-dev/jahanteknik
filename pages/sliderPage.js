import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
const SliderPage = () => {
    return (
        <>
            <Navbar />
            <div className="relative main  mb-[5vh]">
                <h1 className="absolute text-[5vh]  w-[100%] p-1 text-center font-BTitrBd bg-gray-300 hover:bg-gray-400 top-[-12vh] z-10">بهترین مکانیکی در اصفهان با جهان تکنیک</h1>
                    <Header />
                <div className="silder absolute top-[20vh] z-9">
                </div>
                <Link className="w-[100%] p-5 text-center font-BTitrBd bg-gray-300 hover:bg-gray-400 mt-5 block" href='/'> بازگشت به صفحه اصلی</Link>
            </div>
            <Footer />
        </>
    );
}

export default SliderPage;
