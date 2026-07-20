export default function Title({
    children
}) {
    return (
        <h1
            style={{
                fontFamily: "Playfair Display"
            }}
            className="
            text-2xl
            text-center
            leading-tight
            text-gray-800
            "
        >
            {children}
        </h1>
    )
}
