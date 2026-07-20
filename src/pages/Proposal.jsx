import { useState } from "react";
import { motion } from "framer-motion";
import MobileFrame from "../components/MobileFrame";
import Background from "../components/Background";
import Button from "../components/Button";
import { useJourney } from "../context/JourneyContext";

const noTexts = [
    "No",
    "Are you sure? 🥺",
    "Think again 😊",
    "I'll bring dessert 🍰",
    "Pretty Please ❤️",
    "You're making this difficult 😂",
    "Just press YES 😄"
];

export default function Proposal() {
    const [noIndex, setNoIndex] = useState(0);
    const { navigate } = useJourney();

    function handleNo() {
        if (noIndex < noTexts.length - 1) {
            setNoIndex(noIndex + 1);
        }
    }

    return (
        <MobileFrame>
            <Background />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10 h-full flex flex-col justify-center px-8"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2
                    }}
                    className="text-center text-7xl mb-8"
                >
                    ❤️
                </motion.div>
                <h1
                    className="text-center text-5xl leading-tight"
                    style={{
                        fontFamily: "Playfair Display"
                    }}
                >
                    Would you
                    <br />
                    go on a
                    <br />
                    date
                    <br />
                    with me?
                </h1>
                <div className="mt-16 space-y-5">
                    <Button onClick={() => navigate("celebration")}>
                        YES ❤️
                    </Button>
                    <button
                        onClick={handleNo}
                        className="w-full py-4 rounded-full border border-pink-300 bg-white"
                    >
                        {noTexts[noIndex]}
                    </button>
                </div>
            </motion.div>
        </MobileFrame>
    );
}