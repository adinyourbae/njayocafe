// pages/Kategori.js
import Head from "next/head";
import Layout from "../components/Layout";
import css from "../styles/Kategori.module.css";
import { client } from "../lib/client";
import Pantun from "../components/Pantun";
import Minuman from "../components/Minuman";
import Menu from "../components/Menu";
import OpeningSection from "../components/OpeningSection";
import BeginSection from "../components/Begin";

export default function Kategori({ pizzas, minuman }) {
  console.log(pizzas);
  console.log(minuman);

  return (
    <Layout>
      <Head>
        <title>Kategori</title>
        {/* Tambahan tag <meta>, <link>, atau tag head lainnya jika diperlukan */}
      </Head>
      <BeginSection />
      <OpeningSection />
      <Pantun />
      <div className={css.container}>
        <span>hi</span>
      </div>

      <main>
        <Menu pizzas={pizzas} />
        <Minuman minuman={minuman} />
      </main>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  try {
    const pizzaQuery = '*[_type == "pizza"]';
    const minumanQuery = '*[_type == "minuman"]';

    const pizzas = await client.fetch(pizzaQuery);
    const minuman = await client.fetch(minumanQuery);

    return {
      props: {
        pizzas,
        minuman,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        pizzas: [],
        minuman: [],
      },
    };
  }
};
