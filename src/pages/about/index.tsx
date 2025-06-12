import SEO from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import jepinImg from "@/assets/jepin.jpg";

export default function About() {
  return (
    <>
      <SEO
        title="About – Jepin"
        description="Learn more about the Photographer Jepin"
      />
      <Navbar sticky={true} />
      <main className="mx-auto">
        <section className="container mx-auto">
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
        <section className="container mx-auto my-12">
          <h2 className="text-4xl tracking-tight mb-6">About Jepin Krishnan</h2>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
            {/* Image */}
            <div className="w-full md:w-1/3">
              <Image
                className="rounded-2xl shadow-lg w-full object-cover"
                alt="Jepin Krishnan"
                src={jepinImg}
                width="450"
                height="450"
              />
            </div>

            {/* Text */}
            <div className="text-neutral-300 text-base leading-relaxed md:w-2/3">
              <p>
                Jepin Krishnan is much loved, recognized, and respected in the
                field of cultural and visual storytelling not only across India
                but around the world. MBA by education, an photographer by
                passion, and a storyteller by instinct, Jepin inspires countless
                individuals who dream of stepping beyond routine life to follow
                a path fueled by creativity and purpose.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
