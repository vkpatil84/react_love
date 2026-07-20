import { AnimatePresence, motion } from "framer-motion";
export default function PageTransition({
    children,
    pageKey
}) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pageKey}
                initial={{
                    opacity: 0,
                    scale: .97,
                    y: 20,
                    filter: "blur(10px)"
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)"
                }}
                exit={{
                    opacity: 0,
                    scale: .97,
                    y: -20,
                    filter: "blur(10px)"
                }}
                transition={{
                    duration: .55,
                    ease: "easeInOut"
                }}
                className="h-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}