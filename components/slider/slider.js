// components/ImageSlider.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    { src: '/image/s1.jpg', alt: 'Slide 1' }
];

const ImageSlider = ({ autoSlide = true, autoSlideInterval = 5000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        if (!autoSlide) return;
        const interval = setInterval(nextSlide, autoSlideInterval);
        return () => clearInterval(interval);
    }, [autoSlide, autoSlideInterval, images.length]); // images.length هم در dependencies باشد

    return (
        <>
            <h2 data-aos="zoom-out" className='text-center font-mj-titr text-[2rem] font-bold pt-5'>گالری تصاویر</h2>
            <div data-aos="zoom-out" className="relative w-[95%] mt-5 ms-8 h-96 overflow-hidden rounded-lg shadow-xl">

                {/* ⬅️ اصلاح ۱: تضمین عرض کانتینر برای جا دادن همه اسلایدها */}
                <div
                    className="flex transition-transform ease-out duration-500 h-full"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        width: `${images.length * 100}%` // این خط حیاتی است!
                    }}
                >
                    {images.map((image, index) => (
                        // ⬅️ اصلاح ۲: مطمئن شوید هر اسلاید ۱/n از کل عرض را می‌گیرد
                        <div key={index} className="relative h-full" style={{ width: `${100 / images.length}%` }}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, 80vw"
                            // ⬅️ اصلاح ۳: اگر هنوز مشکل دارید، unoptimized={true} را اضافه کنید (موقت)
                            // unoptimized={true} 
                            />
                        </div>
                    ))}
                </div>

                {/* دکمه‌های ناوبری (برای خوانایی بهتر اصلاح شده‌اند) */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button
                        onClick={prevSlide}
                        className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition"
                        aria-label="Previous slide"
                    >
                        <ChevronRight size={30} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition"
                        aria-label="Next slide"
                    >
                        <ChevronLeft size={30} />
                    </button>
                </div>

                {/* نقطه‌های شاخص (Dots) */}
                <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                        {images.map((_, i) => (
                            <div
                                key={i}
                                className={`
                                transition-all w-3 h-3 bg-white rounded-full cursor-pointer
                                ${currentSlide === i ? "p-2 bg-opacity-100" : "bg-opacity-50"}
                            `}
                                onClick={() => setCurrentSlide(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageSlider;