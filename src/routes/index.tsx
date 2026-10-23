import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/loqelo/Footer";
import Hero from "@/components/loqelo/Hero";
import Navbar from "@/components/loqelo/Navbar";
import Platform from "@/components/loqelo/Platform";
import Steps from "@/components/loqelo/Steps";
import VideoSection from "@/components/loqelo/VideoSection";
import Waitlist from "@/components/loqelo/Waitlist";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Loqelo — Everything your place needs." },
      {
        name: "description",
        content:
          "Loqelo connects you with trusted service providers for your home, garden and office. Join the waitlist for the February 2027 launch.",
      },
      { property: "og:title", content: "Loqelo — Everything your place needs." },
      {
        property: "og:description",
        content:
          "Loqelo connects you with trusted service providers for your home, garden and office. Join the waitlist for the February 2027 launch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <Steps />
        <Platform />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
