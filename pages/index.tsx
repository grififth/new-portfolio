import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../components/NavBar";
import HomeText from "../components/HomeText";
import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const Home: NextPage = () => {
  return (
    <motion.div
      className="w-full h-screen overflow-x-hidden overflow-y-hidden"
      initial="initial"
      animate={"animate"}
      exit="initial"
      variants={stagger}
    >
      <Head>
        <title>Stephen Zhang</title>
      </Head>
      <div className="w-full h-screen  bg-gradient-to-t from-gray-900 to-gray-800 absolute -z-10"></div>
      <div className="w-full h-20 pt-8">
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-center mt-20 w-screen h-2/3">
        <HomeText />
      </div>
    </motion.div>
  );
};

export default Home;
