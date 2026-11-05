import { HeroSection } from '@/components/home/HeroSection';
import { ManifestoScroll } from '@/components/home/ManifestoScroll';
import { PinnedHoodieExperience } from '@/components/home/PinnedHoodieExperience';
import { HorizontalLookbook } from '@/components/home/HorizontalLookbook';
import { FeaturedDrop } from '@/components/home/FeaturedDrop';
import { MaterialCraftSection } from '@/components/home/MaterialCraftSection';
import { EditorialDiscourse } from '@/components/home/EditorialDiscourse';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Cinematic Hero */}
      <HeroSection />

      {/* 2. Four Pillars of Dark Psychology */}
      <ManifestoScroll />

      {/* 3. Pinned 360° Scrollytelling Flagship Experience */}
      <PinnedHoodieExperience />

      {/* 4. Horizontal Archive Lookbook Stream */}
      <HorizontalLookbook />

      {/* 5. Curated Drop Grid with Quick-Acquire */}
      <FeaturedDrop />

      {/* 6. Material Craft & Macro Analysis */}
      <MaterialCraftSection />

      {/* 7. Client Discourse & Reviews */}
      <EditorialDiscourse />
    </div>
  );
}
