// import { motion } from "framer-motion";
// export default function Button({
//     children,
//     onClick
// }) {
//     return (
//         <motion.button
//             whileHover={{
//                 scale: 1.03
//             }}
//             whileTap={{
//                 scale: .95
//             }}
//             onClick={onClick}
//             className="w-full rounded-full py-4 bg-pink-500 text-white font-semibold text-lg shadow-xl"
//         >
//             {children}
//         </motion.button>
//     )
// }

import { motion } from "framer-motion";
export default function Button({
    children,
    onClick,
    disabled = false
}) {
    return (
        <motion.button
            whileHover={{
                scale: 1.03
            }}
            whileTap={{
                scale: .96
            }}
            transition={{
                type: "spring",
                stiffness: 300
            }}
            onClick={onClick}
            className={`w-full rounded-full py-4 text-lg font-semibold text-white shadow-xl bg-gradient-to-r from-pink-500 to-rose-400
                        ${disabled? "opacity-40 cursor-not-allowed": ""}
                    `}
            disabled={disabled}
        >
            {children}
        </motion.button>
    );
}