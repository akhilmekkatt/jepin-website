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
      <main className="mx-auto">
        <section className="container mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Festivals</h1>
          <ImageGallery />
        </section>
        <Footer />
      </main>
    </>
  );
}
