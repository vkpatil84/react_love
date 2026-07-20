import { motion } from "framer-motion";
export default function Background() {
    return (
        <>
            <motion.div
                animate={{
                    x: [-40, 40, -40],
                    y: [-30, 20, -30]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity
                }}
                className="absolute w-80 h-80 rounded-full bg-pink-300 blur-3xl opacity-30 -top-20 -left-20"
            />
            <motion.div
                animate={{
                    x: [20, -20, 20],
                    y: [30, -30, 30]
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity
                }}
                className="absolute w-80 h-80 rounded-full bg-purple-300 blur-3xl opacity-20 bottom-0 right-0"
            />
            <motion.div
                animate={{
                    y: [0, -40, 0]
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity
                }}
                className="absolute w-52 h-52 rounded-full bg-rose-200 blur-3xl opacity-30 top-1/2 left-1/2"
            />
            {Array.from({ length: 18 }).map((_, index) => (
                <motion.div
                    key={index}
                    animate={{
                        y: [0, -25, 0],
                        opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{
                        duration: 4 + Math.random() * 5,
                        repeat: Infinity,
                        delay: index * .4
                    }}
                    className="absolute w-2  h-2 rounded-full  bg-white  blur-[1px]"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [20, -40],
                            opacity: [0, .4, 0]
                        }}
                        transition={{
                            duration: 8 + Math.random() * 8,
                            repeat: Infinity,
                            delay: i
                        }}
                        style={{
                            left: `${10 + i * 10}%`
                        }}
                        className=" absolute bottom-0 text-pink-300 text-xl "
                    >
                    ♡
                    </motion.div>
                ))
            }
        </>
    );
}