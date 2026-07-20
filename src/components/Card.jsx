// export default function Card({
//     children
// }) {
//     return (
//         <div className="rounded-[32px] bg-white/70 backdrop-blur-xl shadow-xl p-8">
//             {children}
//         </div>
//     )
// }

export default function Card({ children }) {
    return (
        <div
            className="
            relative
            rounded-[32px]
            bg-white/65
            backdrop-blur-2xl
            shadow-2xl
            border
            border-white/60
            p-8
            "
        >
            {children}
        </div>
    );
}