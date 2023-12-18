import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const Home = () => {
  const context = useContext(myContext);
  const { state, color } = context;
  return (
    <Layout>
      <div>
        <p>Name:{state.name}</p>
        <p>Fame:{state.fame}</p>
      </div>
      <div>{color}</div>
    </Layout>
  );
};

export default Home;
