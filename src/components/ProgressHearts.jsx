export default function ProgressHearts({ current, total }) {

    return (

        <div className="flex justify-center gap-2 mb-10">

            {Array.from({ length: total }).map((_, index) => (

                <span
                    key={index}
                    className={`text-xl transition-all duration-300 ${index <= current
                            ? "opacity-100 scale-110"
                            : "opacity-30"
                        }`}
                >
                    ❤️
                </span>

            ))}

        </div>

    );

}