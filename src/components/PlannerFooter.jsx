import Button from "./Button";
export default function PlannerFooter({
    disabled,
    onNext
}) {
    return (
        <div className="mt-8">
            <Button
                onClick={onNext}
                disabled={disabled}
            >
                Continue →
            </Button>
        </div>
    );
}