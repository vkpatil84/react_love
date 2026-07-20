const stories = [
    {
        id: 1,
        emoji: "❤️",
        title: "Hi.",
        text: [
            "You sent me a reel. It made me smile. Then it gave me an idea."
        ],
        button: "Continue →"
    },
    {
        id: 2,
        emoji: "😊",
        title: "Dear " + import.meta.env.VITE_NAME,
        text: [
            "Most people would've replied with an emoji. \t\n  I opened VS Code."
        ],
        button: "Keep Reading →"
    },
    {
        id: 3,
        emoji: "💻",
        title: "The Truth",
        text: [
            "I'm much better at writing React components than expressing feelings."
        ],
        button: "Almost There →"
    },
    {
        id: 4,
        emoji: "✨",
        title: "So...",
        text: [
            "I built this. Just to make you smile."
        ],
        button: "One Last Thing →"
    }
];
export default stories;