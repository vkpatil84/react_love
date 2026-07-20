import Title from "./Title";
import Subtitle from "./Subtitle";
export default function PlannerHeader({
    title,
    subtitle
}) {
    return (
        <div className="mb-10">
            <Title>
                {title}
            </Title>
            <Subtitle>
                {subtitle}
            </Subtitle>
        </div>
    );
}