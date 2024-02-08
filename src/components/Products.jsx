import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias rerum voluptatibus ea qui tempore, amet facilis repudiandae doloremque, laborum, quos natus? Ad, vel. Aliquid, esse?",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias rerum voluptatibus ea qui tempore, amet facilis repudiandae doloremque, laborum, quos natus? Ad, vel. Aliquid, esse?",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias rerum voluptatibus ea qui tempore, amet facilis repudiandae doloremque, laborum, quos natus? Ad, vel. Aliquid, esse?",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias rerum voluptatibus ea qui tempore, amet facilis repudiandae doloremque, laborum, quos natus? Ad, vel. Aliquid, esse?",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias rerum voluptatibus ea qui tempore, amet facilis repudiandae doloremque, laborum, quos natus? Ad, vel. Aliquid, esse?",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((item, index) => (
        <Product key={index} val={item} mover={mover} count={index} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute -translate-x-[50%] w-[32rem] h-[23rem] bg-white left-[42%]  overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-600"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-700"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-800"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
