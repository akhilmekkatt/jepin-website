import SEO from "../../components/SEO";
import Navbar from "../../components/Navbar";
export default function About() {
  return (
    <>
      <SEO
        title="About – Jepin"
        description="Learn more about the artist Jepin"
      />
      <Navbar />
      <main className="mx-auto">
        <section className="container mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            About Jepin Krishnan
          </h1>
          <div className="space-y-6 text-neutral-300 text-base leading-relaxed">
            <p>
              Jepin Krishnan is a passionate cultural explorer and visual
              storyteller who dedicates his work to uncovering the rich, diverse
              traditions of India. With a deep curiosity for the country’s
              lesser-known narratives, he journeys across remote villages,
              tribal communities, and vibrant festival grounds to document the
              living heritage of India’s people.
            </p>
            <p>
              His work goes beyond the surface, capturing the spirit, rituals,
              and everyday lives of indigenous cultures that are often
              overlooked. Through photography, writing, and immersive
              storytelling, Jepin sheds light on the unique identities of
              India’s tribes and the symbolic meanings behind age-old festivals.
            </p>
            <p>
              His aim is not only to celebrate these traditions but also to
              raise awareness about the importance of cultural preservation in a
              rapidly changing world. Whether he’s sharing the rhythmic pulse of
              a tribal dance, the sacred fire of a rural ritual, or the colors
              of a local celebration, Jepin brings audiences closer to the soul
              of India.
            </p>
            <p>
              His work invites viewers from around the world to see the beauty
              and complexity of a nation that thrives on diversity. With each
              journey, Jepin continues to build a bridge between tradition and
              modernity, one story at a time.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
