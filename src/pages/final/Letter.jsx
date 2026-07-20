h-full Button from "../../components/Button";
import MobileFrame from "../../components/MobileFrame";
import { useJourney } from "../../context/JourneyContext";

export default function Letter() {
    const { navigate } = useJourney();
    const DName = import.meta.env.VITE_NAME;

    return (
        <MobileFrame>
            <div className="min-h-full flex items-center justify-center bg-[#FFFDF7] p-8 pt-12">
                <div className=" bg-[#FFFDF7] rounded-2xl shadow-xl p-6 rotate-[0.5deg] max-w-md " >
                    <h1 style={{ fontFamily: "Playfair Display" }} className="text-2xl mb-4" >
                        Hi {DName},
                    </h1>
                    <div style={{ fontFamily: "Caveat" }} className="text-lg leading-relaxed text-gray-700" >
                        <p>
                            Thank you for taking a few minutes to go through this little project.
                        </p>
                        <br />
                        <p>
                            You sent me a reel...
                        </p>
                        <p>
                            I probably could've just replied with an emoji.
                        </p>
                        <br />
                        <p>
                            Instead... <br/> I opened VS Code.
                        </p> 
                        <br/>

                        <p>
                            Every animation. <br/> Every button. <br/> Every tiny detail.
                        </p>
                        
                        <p>
                            Was built with one hope...
                        </p>
                        <br />
                        <p>
                            To make you smile.
                        </p>
                        <br />
                        <p>
                            If you're smiling right now,
                        </p>
                        <p>
                            then this project was already worth making.
                        </p>
                        <br />
                        ❤️
                        <br />
                        <p>
                            — Vaibhav
                        </p>
                    </div>
                    <div className="mt-6">
                        <Button
                            onClick={() => navigate("invitation")}
                        >
                            Continue ❤️
                        </Button>
                    </div>
                </div>
            </div>
        </MobileFrame>
    );
}
