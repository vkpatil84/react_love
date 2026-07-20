import { motion } from "framer-motion";
export default function OptionCard({
    selected,
    title,
    emoji,
    onClick
}) {
    return (
        <motion.button
            whileHover={{
                scale: 1.02
            }}
            whileTap={{
                scale: .96
            }}
            onClick={onClick}
            className={` w-full rounded-3xl p-3 mb-2 transition-all border-2
                        ${selected ? "border-pink-500 bg-pink-50 shadow-xl" : "border-transparent bg-white/70"}
                    `}
        >
            <div className="text-3xl">
                {emoji}
            </div>
            <div className="mt-3 text-lg font-semibold">
                {title}
            </div>
        </motion.button>
    );
}