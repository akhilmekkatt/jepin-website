import Navbar from "@/components/Navbar";
import SEO from "../components/SEO";
import img_placeholder from "../assets/image placeholder.jpg";
import Footer from "@/components/Footer";
import BannerSlider from "@/components/BannerSlider";

export default function Home() {
  return (
    <>
      <SEO
        title="Jepin – Visual Artist | Illustrator"
        description="Portfolio of Jepin – visual artist, watercolorist, and creative explorer."
      />
      <Navbar sticky={false} />
      <BannerSlider />
      {/* <main className="mx-auto">
        <section className="container mx-auto">
          <h1 className="mt-4 text-2xl font-bold">I'm Jepin Krishnan</h1>
          <div className="animate-slideUp my-4">
            A passionate cultural explorer and visual storyteller who dedicates
            his work to uncovering the rich, diverse traditions of India.
          </div>
      
         
        </section>
      </main> */}
      <Footer />
    </>
  );
}
