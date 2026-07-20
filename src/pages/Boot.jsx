import { useEffect, useState } from "react";
import { useJourney } from "../context/JourneyContext";
import MobileFrame from "../components/MobileFrame";
const steps = [
    "Initializing project...",
    "Compiling courage...",
    "Generating smile...",
    "Loading one important question...",
    "Preparing surprise...",
    "Ready."
];
export default function Boot() {
    const [completed, setCompleted] = useState([]);
    const [progress, setProgress] = useState(0);
    const { navigate } = useJourney();

    useEffect(() => {
        let currentStep = 0;
        const stepTimer = setInterval(() => {
            if (currentStep < steps.length) {
                setCompleted(prev => [...prev, steps[currentStep]]);
                currentStep++;
            } else {
                clearInterval(stepTimer);
            }
        }, 1000);
        const progressTimer = setInterval(() => {
            setProgress(prev => {
                const next = prev + 2;
                if (next >= 100) {
                    clearInterval(progressTimer);
                    setTimeout(() => {
                        navigate("story");
                    }, 800);
                    return 100;
                }
                return next;
            });
        }, 100);
        return () => {
            clearInterval(stepTimer);
            clearInterval(progressTimer);
        };
    }, []);
    return (
        <MobileFrame>
            <div className="bg-slate-950 h-full text-green-400 font-mono flex flex-col justify-center px-8 py-16">
                <p className="text-xl mb-8">
                    $ npm run ask-her-out
                </p>
                <div className="space-y-3">
                    {completed.map((step, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3"
                        >
                            <span>✔</span>
                            <span>{step}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-16">
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                        <div
                            className="bg-green-400 h-full transition-all"
                            style={{
                                width: `${progress}%`
                            }}
                        />
                    </div>
                    <p className="mt-4 text-slate-400">
                        {progress}% Complete
                    </p>
                </div>
            </div>
        </MobileFrame>
    );
}