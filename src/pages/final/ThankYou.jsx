import { useState, useEffect } from "react";
import Button from "../../components/Button";
import MobileFrame from "../../components/MobileFrame";
import { useJourney } from "../../context/JourneyContext";
export default function ThankYou() {
    const { navigate } = useJourney();
    const [showReplay, setShowReplay] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowReplay(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <MobileFrame>
            <div className="h-full flex flex-col justify-center items-center bg-gradient-to-b from-pink-50 to-white p-8">
                <div className="text-8xl">
                    ❤️
                </div>
                <h1
                    className="mt-8 text-5xl"
                    style={{
                        fontFamily: "Playfair Display"
                    }}
                >
                    Thank You
                </h1>
                <p className="mt-10 text-center text-gray-500 leading-8">
                    For taking the time
                    <br />
                    to go through this.
                    <br /><br />
                    It truly means a lot.
                    <br /><br />
                    Hopefully...
                    <br />
                    See you soon 😊
                </p>
                {showReplay && (
                    <div className="mt-16 w-full">
                        <Button
                            onClick={() => navigate("boot")}
                        >
                            Replay ❤️
                        </Button>
                    </div>
                )}
                <p className="mt-12 text-sm text-gray-400 text-center">
                    Built with React ⚛️
                    <br />
                    Coffee ☕
                    <br />
                    and a little courage ❤️
                </p>
            </div>
        </MobileFrame>
    );
}