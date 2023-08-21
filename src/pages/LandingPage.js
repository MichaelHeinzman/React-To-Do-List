import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  headContainerAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const LandingPage = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          key="landing page"
          className="p-1 md:p-8"
          {...slideAnimation("left")}
        >
          <motion.div {...headContainerAnimation}>
            <h1 className="text-[6rem] font-black leading-[7rem] text-white xl:text-[10rem] xl:leading-[11rem]">
              TO-DO <br className="hidden xl:block" /> List
            </h1>
          </motion.div>

          <motion.div
            {...headContainerAnimation}
            className="flex flex-col gap-5"
          >
            <p className="max-w-md text-base font-normal text-white">
              Culpa duis commodo excepteur veniam ut sint elit cupidatat
              cupidatat aute. Qui excepteur occaecat minim quis quis proident
              magna. Excepteur occaecat eu quis aliquip cillum cupidatat esse
              non nisi reprehenderit ea consequat sunt.
            </p>

            <button
              onClick={() => (state.intro = false)}
              className="w-fit flex-1 rounded-md bg-black px-2 py-2.5 text-sm font-bold text-white"
            >
              Go To List
            </button>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default LandingPage;
