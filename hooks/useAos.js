// hooks/useAos.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // ایمپورت CSS مربوط به AOS

export const useAos = () => {
  useEffect(() => {
    AOS.init({
      // تنظیمات دلخواه شما برای AOS
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);
};