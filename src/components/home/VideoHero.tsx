"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface VideoHeroProps {
    videoSrc: string;
    posterImage: string;
    children?: React.ReactNode;
}

export function VideoHero({ videoSrc, posterImage, children }: VideoHeroProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoReady, setIsVideoReady] = useState(false);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Fallback poster image — shown until video can play */}
            <div
                className={`absolute inset-0 transition-opacity duration-1000 ${isVideoReady ? "opacity-0" : "opacity-100"}`}
                style={{ zIndex: 0 }}
            >
                <Image
                    src={posterImage}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Video element */}
            <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoReady ? "opacity-100" : "opacity-0"}`}
                style={{ zIndex: 1 }}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onCanPlay={() => setIsVideoReady(true)}
            >
                <source src={videoSrc} type="video/mp4" />
            </video>

            {/* Gradient overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"
                style={{ zIndex: 2 }}
            />

            {/* Content overlay */}
            <div className="relative h-full w-full" style={{ zIndex: 10 }}>
                {children}
            </div>
        </section>
    );
}
