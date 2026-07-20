import { useEffect, useState } from "react";
export default function Typewriter({
    text,
    speed = 35,
    onComplete
}) {
    const [displayText, setDisplayText] = useState("");
    useEffect(() => {
        let index = 0;
        setDisplayText("");
        const interval = setInterval(() => {
            setDisplayText(text.substring(0, index + 1));
            index++;
            if (index >= text.length) {
                clearInterval(interval);
                onComplete && onComplete();
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text]);
    return (
        <span>
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    );
}