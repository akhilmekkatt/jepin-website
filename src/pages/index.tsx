import Navbar from "@/components/Navbar";
import SEO from "../components/SEO";
import img_placeholder from "../assets/image placeholder.jpg";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEO
        title="Jepin – Visual Artist | Illustrator"
        description="Portfolio of Jepin – visual artist, watercolorist, and creative explorer."
      />
      <Navbar />
      <main className="mx-auto">
        <section className="container mx-auto">
          <h1 className="mt-4 text-2xl font-bold">I'm Jepin Krishnan</h1>
          <div className="animate-slideUp my-4">
            A passionate cultural explorer and visual storyteller who dedicates
            his work to uncovering the rich, diverse traditions of India.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div
                key={item}
                className=" bg-white dark:bg-gray-800  shadow-md text-text-light dark:text-text-dark font-sans"
              >
                <img
                  src={img_placeholder.src}
                  width={img_placeholder.width}
                  height={400}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="bg-lite">
          <div className="container mx-auto py-4">
            <h1 className="text-2xl font-bold">Jepin Krishnan</h1>
            <p>
              A passionate cultural explorer and visual storyteller who
              dedicates his work to uncovering the rich, diverse traditions of
              India. With a deep curiosity for the country’s lesser-known
              narratives, he journeys across remote villages, tribal
              communities, and vibrant festival grounds to document the living
              heritage of India’s people. His work goes beyond the surface,
              capturing the spirit, rituals, and everyday lives of indigenous
              cultures that are often overlooked. Through photography, writing,
              and immersive storytelling, Jepin sheds light on the unique
              identities of India's tribes and the symbolic meanings behind
              age-old festivals. His aim is not only to celebrate these
              traditions but also to raise awareness about the importance of
              cultural preservation in a rapidly changing world. Whether he's
              sharing the rhythmic pulse of a tribal dance, the sacred fire of a
              rural ritual, or the colors of a local celebration, Jepin brings
              audiences closer to the soul of India. His work invites viewers
              from around the world to see the beauty and complexity of a nation
              that thrives on diversity. With each journey, Jepin continues to
              build a bridge between tradition and modernity, one story at a
              time.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
