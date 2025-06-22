import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ReviewSection from "@/components/home/ReviewSection";
import FAQSection from "@/components/home/FAQSection";
import VideoSection from "@/components/home/VideoSection";

export const metadata = {
  title: "DreamSellers - Building Dreams Into Reality",
  description:
    "DreamSellers is a premier real estate development company that transforms visions into exceptional living and working spaces. We specialize in luxury residential and commercial projects with innovative design and sustainable practices.",
  keywords: [
    "real estate development",
    "luxury properties",
    "sustainable housing",
    "commercial real estate",
    "property investment",
    "dream sellers",
    "premium real estate",
    "modern architecture",
    "smart homes",
    "eco-friendly properties",
  ],
  metadataBase: new URL("https://dreamseller.ca"),
  alternates: {
    canonical: `/`,
  },
};

export default async function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Marquee Section */}
      {/* <MarqueeSection /> */}
      
      {/* Featured Projects */}
      <ProjectsSection />
      
      {/* Video Showcase */}
      <VideoSection
        title="Built for the Future"
        description="Discover how our smart systems power seamless experiences and create homes that adapt to your lifestyle."
        buttonText="Learn More"
        buttonLink="/services"
        videoSrc="/videos/vid-1.mp4"
      />
      
      {/* Second Video Section */}
      <VideoSection
        title="Green Living in Action"
        description="Sustainable design meets high-end comfort in our eco-friendly developments."
        buttonText="Explore Now"
        buttonLink="/services"
        videoSrc="/videos/vid-2.mp4"
        reverse
      />
      
      {/* Reviews Section */}
      <ReviewSection />
      
      {/* Partners Section */}
      <PartnersSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Section */}
      {/* <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/slide-1.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Build Your Dream?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Our team is ready to turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section> */}
    </main>
  );
}
