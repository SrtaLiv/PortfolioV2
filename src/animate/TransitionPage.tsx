"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {  AnimatePresence } from "framer-motion";
// const transitionPageVariants = (ogComponent: React.ComponentType) => {
//     return () => {
//         <>
//         <ogComponent />
//             <motion.div
//                 className="slide-in"
//                 initial={{scaleY: 0}}
//                 animate={{scaleY: 0}}
//                 exit={{scaleY: 1}}
//                 transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
//                 />
//              <motion.div
//                 className="slide-out"
//                 initial={{scaleY: 1}}
//                 animate={{scaleY: 1}}
//                 exit={{scaleY: 0}}
//                 transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
//                 />
//         </>
//     }
// }

// export default transitionPageVariants;


function InstallModal() {
  const [modalOpen, setModalOpen] = useState(false);

  if (!modalOpen)
    return (
      <div className="absolute bottom-0 ">
        <button
          className="text-lg rounded-t-md createAnAccount-bg px-2 py-1 flex flex-row text-white"
          onClick={() => setModalOpen(true)}
        >
          <a>Install App</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M6 20q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Z"
            />
          </svg>
        </button>
      </div>
    );

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          key="box"
          initial={{ y: "50%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          exit={{ y: "50%", opacity: 0, transition: { duration: 0.2 } }}
          className="absolute bottom-0 bg-white flex rounded-t-2xl w-[80%] h-[65%]"
        >
          <div className="flex flex-col mt-4 px-4">
            <div className="flex justify-center align-middle self-end">
              <button
                className="createAnAccount-bg text-white rounded-full"
                onClick={() => setModalOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.0rem"
                  height="2.0rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
                  />
                </svg>
              </button>
            </div>

            <h2 className="text-2xl mb-4">
              Install this web app on your iPhone:
            </h2>
            <ol className="list-decimal ml-5">
              <li>Tap the Share button in Safari.</li>
              <li>Slowly scroll down and tap "Add to Home Screen."</li>
              <li>Tap "Add" in the upper-right corner.</li>
            </ol>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default InstallModal;