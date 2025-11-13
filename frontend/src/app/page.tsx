import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";


export default function Home() {
  return (
   <div>
    <Navbar/>
    <div className="w-full h-screen">
      <img src="/BG.png" alt="" />
    </div>
    <Footer/>
   </div>
  );
}
