import { useEffect } from "react";
import confetti from "canvas-confetti";
import MobileFrame from "../components/MobileFrame";
import Background from "../components/Background";
import Button from "../components/Button";
import { useJourney } from "../context/JourneyContext";

export default function Celebration({ onContinue }) {
    const { navigate } = useJourney();

    useEffect(() => {
        confetti({
            particleCount: 250,
            spread: 120,
            origin: { y: .6 }
        });
    }, []);

    return (
        <MobileFrame>
            <Background />
            <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
                <div className="text-8xl">
                    ❤️
                </div>
                <h1 className="mt-8 text-center text-5xl" style={{ fontFamily: "Playfair Display" }} >
                    YAY!!
                </h1>
                <p className="mt-8 text-center text-lg text-gray-600 leading-8">
                    You said YES ❤️ <br />
                    I'm officially excited now 😊
                </p>
                <div className="w-full mt-16">
                    <Button
                        onClick={() => navigate("date")}
                    >
                        Continue →
                    </Button>
                </div>
            </div>
        </MobileFrame>
    );
}