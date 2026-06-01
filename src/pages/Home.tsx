import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import LeatherAccessoriesBanner from '../components/LeatherAccessoriesBanner';
import TagCloud from '../components/TagCloud';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <LeatherAccessoriesBanner />
      <TagCloud />
    </>
  );
}
