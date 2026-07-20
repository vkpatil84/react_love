import Button from "../../components/Button";
import Card from "../../components/Card";
import MobileFrame from "../../components/MobileFrame";
import Background from "../../components/Background";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import { useJourney } from "../../context/JourneyContext";
export default function InvitationCard() {
    const { journey, navigate } = useJourney();
    return (
        <MobileFrame>
            <Background />
            <div className="relative z-10 h-full flex items-center justify-center p-6">
                <Card>
                    <Title>
                        Our First Date ❤️
                    </Title>
                    <Subtitle>
                        Here's our little plan.
                    </Subtitle>
                    <div className="mt-10 space-y-5 text-xl">
                        <p>📅 {journey.date}</p>
                        <p>🕒 {journey.time}</p>
                        <p>🍕 {journey.food}</p>
                        <p>🎬 {journey.activity}</p>
                    </div>
                    <div className="mt-10">
                        <Button >
                            📅 Add to Calendar
                        </Button>
                    </div>
                    <div className="mt-10">
                        <Button onClick={() => navigate("thankyou")} >
                            I Can't Wait ❤️
                        </Button>
                    </div>

                </Card>
            </div>
        </MobileFrame>
    );
}