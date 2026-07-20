import { useEffect, useRef, useState } from "react";
import MobileFrame from "../../components/MobileFrame";
import Background from "../../components/Background";
import Card from "../../components/Card";
import buildSteps from "../../data/buildSteps";
import { delay } from "../../utils/delay";
import { useJourney } from "../../context/JourneyContext";

export default function FinalBuild() {

    const { navigate } = useJourney();
    const [completed, setCompleted] = useState([]);
    const hasRun = useRef(false);

    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        async function runBuild() {
            for (const step of buildSteps) {
                await delay(900);
                setCompleted(prev => [...prev, step]);
            }
            await delay(1500);
            navigate("letter");
        }
        runBuild();
    }, []);

    return (
        <MobileFrame>
            <Background />
            <div className="relative z-10 h-full flex items-center justify-center p-8">
                <Card>
                    <h2
                        className="text-3xl mb-8"
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        Preparing Our Date...
                    </h2>
                    <div className="space-y-4">
                        {completed.map((step, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 text-lg"
                            >
                                <span className="text-green-500">
                                    ✔
                                </span>
                                {step}
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </MobileFrame>
    );
}