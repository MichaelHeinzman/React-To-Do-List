import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { navAnimation } from "../config/motion";
import { motion } from "framer-motion";
const Navbar = () => {
  const snap = useSnapshot(state);
  return (
    !snap.intro && (
      <motion.nav
        className="flex w-full justify-between bg-white p-4 text-black"
        {...navAnimation}
      >
        <h1>TO-DO</h1>
        <button className="" onClick={() => (state.intro = true)}>
          BACK
        </button>
      </motion.nav>
    )
  );
};

export default Navbar;
