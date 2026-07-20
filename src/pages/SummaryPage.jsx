import MobileFrame from "../components/MobileFrame";
import Background from "../components/Background";
import Card from "../components/Card";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";
import { useJourney } from "../context/JourneyContext";
export default function SummaryPage() {
    const {
        journey,
        navigate
    } = useJourney();
    return (
        <MobileFrame>
            <Background />
            <div className="relative z-10 h-full flex items-center px-6">
                <Card>
                    <Title>
                        Our First Date ❤️
                    </Title>
                    <Subtitle>
                        Here's what we've planned.
                    </Subtitle>
                    <div className="mt-10 space-y-5 text-lg">
                        <p>📅 {journey.date}</p>
                        <p>🕒 {journey.time}</p>
                        <p>🍕 {journey.food}</p>
                        <p>🎯 {journey.activity}</p>
                    </div>
                    <div className="mt-10">
                        <Button
                            onClick={() =>
                                navigate("final-build")
                            }
                        >
                            Looks Perfect ❤️
                        </Button>
                    </div>
                </Card>
            </div>
        </MobileFrame>
    );
}