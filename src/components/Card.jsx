import { motion } from "framer-motion";
import React from "react";
import { LuMoveRight } from "react-icons/lu";

function Card({ width, start, para, hover="false", secCard, upSecCard }) {

  return (
    <motion.div whileHover={{backgroundColor: hover === "true" && "#7443ff", padding: "25px"}}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          {upSecCard === true ? <h3>Up Next: News</h3> : <h3>Get in Touch</h3>}
          <LuMoveRight />
        </div>
        {secCard === true ? (
          <h1 className="text-3xl mt-5">Insights and behind the scenes</h1>
        ) : (
          <h1 className="text-3xl mt-5">Let’s get to it,together.</h1>
        )}
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-8xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full py-2 px-5 border-[1px] mt-5 border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
