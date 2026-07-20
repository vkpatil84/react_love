import {
    dateOptions,
    timeOptions,
    foodOptions,
    activityOptions
} from "./planner";
export const plannerSteps = {
    date: {
        title: "When should we meet? ❤️",
        subtitle: "Pick a day that feels right.",
        field: "date",
        next: "time",
        options: dateOptions
    },
    time: {
        title: "What time suits you?",
        subtitle: "No pressure 😊",
        field: "time",
        next: "food",
        options: timeOptions
    },
    food: {
        title: "What should we eat?",
        subtitle: "Food always makes everything better.",
        field: "food",
        next: "activity",
        options: foodOptions
    },
    activity: {
        title: "What shall we do?",
        subtitle: "Choose something fun.",
        field: "activity",
        next: "summary",
        options: activityOptions
    }
};