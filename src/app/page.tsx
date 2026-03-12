import { Hero } from "@/components/sections/Hero";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { BrandCollaborations } from "@/components/sections/BrandCollaborations";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <VideoShowcase />
      <PhotoGallery />
      <Services />
      <BrandCollaborations />
      <About />
      <Contact />
    </div>
  );
}
