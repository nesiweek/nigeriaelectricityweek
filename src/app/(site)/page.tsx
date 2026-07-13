import { Hero } from "@/components/sections/Hero";
import { EventOverview } from "@/components/sections/EventOverview";
import { EventStats } from "@/components/sections/EventStats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EventOverview />
      <EventStats />
    </>
  );
}
