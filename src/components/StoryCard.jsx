import Card from "./Card";
import Button from "./Button";
import ProgressHearts from "./ProgressHearts";
import Typewriter from "./Typewriter";
export default function StoryCard({
    story,
    current,
    total,
    onNext
}) {

    console.log("Story: ", story);
    return (
        <Card>
            <ProgressHearts
                current={current}
                total={total}
            />
            <div className="text-6xl text-center mb-8">
                {story?.emoji}
            </div>
            <h1
                className="text-4xl text-center mb-8"
                style={{
                    fontFamily: "Playfair Display"
                }}
            >
                {story?.title}
            </h1>
            <div className="space-y-6 text-center text-lg text-gray-600">
                {story?.text?.map((line, index) => (
                    <Typewriter key={index} text={line} speed={60}/>
                ))}
            </div>
            <div className="mt-12">
                <Button onClick={onNext}>
                    {story?.button}
                </Button>
            </div>
            <p className="mt-8 text-center text-sm text-gray-400">
                Made with React, coffee ☕ and a little courage ❤️
            </p>
        </Card>
    );
}