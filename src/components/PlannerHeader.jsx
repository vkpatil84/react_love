import Title from "./Title";
import Subtitle from "./Subtitle";
export default function PlannerHeader({
    title,
    subtitle
}) {
    return (
        <div className="mb-6">
            <Title>
                {title}
            </Title>
            <Subtitle>
                {subtitle}
            </Subtitle>
        </div>
    );
}
