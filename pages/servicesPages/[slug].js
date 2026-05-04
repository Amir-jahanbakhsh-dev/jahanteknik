import { useRouter } from "next/router";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function ServiceDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  switch (slug) {
    case value:
        
        break;
  
    default:
        break;
  }
  return (
    <div className="mt-[23vh]">
      <Navbar />

      <h1 className="text-[4vh] text-center font-BTitrBd bg-gray-200 p-4">
        سرویس: {slug}
      </h1>

      <p className="text-center mt-5 text-xl">
        اینجا می‌تونی توضیحات مربوط به سرویس {slug} را قرار بدی.
      </p>

      <Footer />
    </div>
  );
}
