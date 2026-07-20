import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileFrame from "../components/MobileFrame";
import Background from "../components/Background";
import StoryCard from "../components/StoryCard";
import stories from "../data/stories";
import { useJourney } from "../context/JourneyContext";

export default function Story() {
    const [index, setIndex] = useState(0);
    const { navigate } = useJourney();

    function nextStory() {
        if (index === stories.length - 1) {
            navigate("proposal");
            return;
        }
        setIndex(index + 1);
    }
    return (
        <MobileFrame>
            <Background />
            <div className="relative z-10 h-full flex justify-center items-center p-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={stories[index].id}
                        initial={{
                            opacity: 0,
                            y: 40,
                            scale: .95
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}
                        exit={{
                            opacity: 0,
                            y: -40,
                            scale: .95
                        }}
                        transition={{
                            duration: .45
                        }}
                        className="w-full"
                    >
                        <StoryCard
                            story={stories[index]}
                            current={index}
                            total={stories.length}
                            onNext={nextStory}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </MobileFrame>
    );
}