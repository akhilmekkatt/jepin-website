import SEO from "../../components/SEO";
import Navbar from "../../components/Navbar";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";
export default function About() {
  return (
    <>
      <SEO
        title="Festivals – Jepin"
        description="Learn more about the artist Jepin"
      />
      <Navbar sticky={true} />

      <section className="container mx-auto px-5">
        <h1 className="text-4xl  tracking-tight mb-6">Festivals</h1>
        <ImageGallery />
      </section>
      <Footer />
    </>
  );
}
