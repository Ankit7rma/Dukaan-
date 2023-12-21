import Filter from "../../components/filter/Filter";
import HeroSection from "../../components/herosection/HeroSection";
import Layout from "../../components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Filter />
    </Layout>
  );
};

export default Home;
