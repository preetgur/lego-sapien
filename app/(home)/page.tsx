import About2 from "../components/About2/About2";
import Contact2 from "../components/Contact2/Contact2";
import Faq from "../components/FAQ/Faq";
import MainBanner from "../components/MainBanner/MainBanner";
import Testimonials from "../components/Testimonials";
import Welcome from "../components/Welcome/Welcome";

export default function Home() {
  return (
    <main className="">
      <MainBanner />
      <Welcome />
      <About2 />
      <Faq />
      <Contact2 />
      <Testimonials />
    </main>
  );
}
