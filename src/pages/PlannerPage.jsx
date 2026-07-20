import MobileFrame from "../components/MobileFrame";
import Background from "../components/Background";
import Card from "../components/Card";
import PlannerHeader from "../components/PlannerHeader";
import PlannerFooter from "../components/PlannerFooter";
import OptionCard from "../components/OptionCard";
import { useJourney } from "../context/JourneyContext";
import { plannerSteps } from "../data/plannerSteps";
export default function PlannerPage() {
    const {
        journey,
        update,
        navigate
    } = useJourney();

    const config = plannerSteps[journey.screen];
    const value = journey[config.field];

    return (
        <MobileFrame>
            <Background />
            <div className="relative z-10 h-full flex items-center px-6">
                <Card>
                    <PlannerHeader title={config.title} subtitle={config.subtitle} />
                    {
                        config.options.map(option => (
                            <OptionCard
                                key={option.title}
                                title={option.title}
                                emoji={option.emoji}
                                selected={value === option.title}
                                onClick={() =>
                                    update(
                                        config.field,
                                        option.title
                                    )
                                }
                            />
                        ))
                    }
                    <PlannerFooter
                        disabled={!value}
                        onNext={() =>
                            navigate(config.next)
                        }
                    />
                </Card>
            </div>
        </MobileFrame>
    );
}