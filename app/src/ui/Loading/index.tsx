import LoadingAnimation from "@/assets/animations/LoadingAnimation.json";
import Lottie from "lottie-react";

export function Loading() {
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <Lottie animationData={LoadingAnimation} loop={true} style={{width: 256, height: 256}}/>
        </div>
    );
}