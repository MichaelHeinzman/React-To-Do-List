import React from "react";
import ListContainer from "../components/ListContainer/ListContainer";
import List from "../components/List/List";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useSnapshot } from "valtio";
import state from "../store";
import { headContainerAnimation } from "../config/motion";

const Content = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <motion.section
          key="content"
          className="absolute h-full w-full transition-all ease-in-out"
          {...headContainerAnimation}
        >
          <Navbar />
          <div className="flex h-full w-full grid-cols-1 p-4 md:grid-cols-3">
            <div className="invisible md:visible md:w-1/5"></div>
            <div className="w-full flex-col justify-center bg-transparent align-top md:w-3/5 md:p-3">
              {/* A higher order component or container to reuse, with different List component UI */}
              <ListContainer>{(list) => <List list={list} />}</ListContainer>
            </div>
            <div className="invisible md:visible md:w-1/5"></div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Content;
