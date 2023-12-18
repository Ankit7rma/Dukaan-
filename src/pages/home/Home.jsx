import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const Home = () => {
  const context = useContext(myContext);
  const { mode, toggleMode } = context;
  return (
    <Layout>
      <div>Home</div>
      <div></div>
      <button onClick={toggleMode}>Toggle</button>
    </Layout>
  );
};

export default Home;
