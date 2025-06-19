import Hero from "./Hero/Hero";
import FeatureProducts from "./FeatureProducts/FeatureProducts";
import LatestProducts from "./LatestProducts/LatestProducts";
import UniqueFeatures from "./UniqueFeatures/UniqueFeatures";
import TrendingProducts from "./TrendingProducts/TrendingProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureProducts />
      <LatestProducts />
      <UniqueFeatures />
      <TrendingProducts />
    </main>
  );
}
