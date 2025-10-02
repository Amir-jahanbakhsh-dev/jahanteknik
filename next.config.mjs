// next.config.mjs (کد صحیح)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // اگر قبلاً برای استاتیک build این را اضافه کرده بودید
  // ... سایر تنظیمات شما ...
  // مثال:
  // images: {
  //   domains: ['example.com'],
  // },
  images: {
   unoptimized: false
  }
};

export default nextConfig; // <--- این را تغییر دهید