export default function MobileFrame({ children }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 p-5">
            <div className=" relative w-full max-w-[430px] h-[min(932px,95vh)] rounded-[46px] overflow-hidden shadow-2xl border-[10px] border-black bg-white " >
                {/* Dynamic Island */}
                <div className=" absolute top-3 left-1/2 -translate-x-1/2 w-32 h-8 rounded-full bg-black z-50 " />
                <div className="h-full overflow-y-auto overflow-x-hidden"
                    style={{
                        paddingTop: "env(safe-area-inset-top)",
                        paddingBottom: "env(safe-area-inset-bottom)",
                        paddingLeft: "env(safe-area-inset-left)",
                        paddingRight: "env(safe-area-inset-right)"
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
