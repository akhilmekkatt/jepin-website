import Navbar from "@/components/Navbar";
import SEO from "../components/SEO";
import Footer from "@/components/Footer";
import BannerSlider from "@/components/BannerSlider";
import FlickrSlider from "@/components/FlickrSlider";

export default function Home() {
  return (
    <>
      <SEO
        title="Jepin – Travel | Culture | Tribes"
        description="Portfolio of Jepin – photographer, and creative explorer."
      />
      <Navbar sticky={false} />
      <BannerSlider />
      {/* <FlickrSlider /> */}
      <Footer />
    </>
  );
}
