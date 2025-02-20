import { h1 } from "framer-motion/client"
import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MotionComponent() {
    return (
        <>
        <h1>Drag!</h1>
            <motion.div
                drag
                dragConstraints={{
                    top: 0,
                    left: -50,
                    right: 50,
                    bottom: 50
                }}
            >
                Hello Worlds!</motion.div>
        </>
    )
}