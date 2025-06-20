import Hero from "./Hero/Hero";
import FeatureProducts from "./FeatureProducts/FeatureProducts";
import LatestProducts from "./LatestProducts/LatestProducts";
import UniqueFeatures from "./UniqueFeatures/UniqueFeatures";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
import DiscountItems from "./DiscountItems/DiscountItems";
import TopCategories from "./TopCategories/TopCategories";
import NewsLetter from "./NewsLetter/NewsLetter";
import LatestBlogs from "./LatestBlogs/LatestBlogs";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureProducts />
      <LatestProducts />
      <UniqueFeatures />
      <TrendingProducts />
      <DiscountItems />
      <TopCategories />
      <NewsLetter/>
      <LatestBlogs />
    </main>
  );
}
