import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectLayout({ children }) {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <div className="pt-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}
