use client;

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface ImageSequenceHeroProps {
    folderPath: string;
    frameCount: number;
    fps?: number;
    fallbackImage: string;
    resolvePath: (index: number) => string;
    children?: React.ReactNode;
}

export function ImageSequenceHero({
    frameCount,
    fps = 30,
    fallbackImage,
    resolvePath,
    children,
}: ImageSequenceHeroProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const imagesRef = useRef<HTMLImageElement[]>([]);
    const requestRef = useRef<number | null>(null);
    const frameIndexRef = useRef(0);
    const lastFrameTimeRef = useRef(0);
    const frameInterval = 1000 / fps;

    const chunks = [
        { start: 0, end: Math.min(239, frameCount - 1), loadTrigger: 0 },
        { start: 240, end: Math.min(479, frameCount - 1), loadTrigger: 20 },
        { start: 480, end: Math.min(629, frameCount - 1), loadTrigger: 240 },
    ];

    const loadedChunksRef = useRef<Set<number>>(new Set());

    const loadChunk = useCallback((chunkIndex: number) => {
        if (loadedChunksRef.current.has(chunkIndex)) return;
        loadedChunksRef.current.add(chunkIndex);

        const chunk = chunks[chunkIndex];
        if (!chunk) return;

        for (let i = chunk.start; i <= chunk.end; i++) {
            const img = new window.Image();
            img.src = resolvePath(i);
            imagesRef.current[i] = img;
        }

        if (chunkIndex === 0) {
            const checkFirstChunk = setInterval(() => {
                const firstChunk = chunks[0];
                let readyCount = 0;
                const threshold = Math.min(30, firstChunk.end + 1);

                for (let i = firstChunk.start; i <= firstChunk.end; i++) {
                    if (imagesRef.current[i]?.complete) readyCount++;
                }

                if (readyCount >= threshold) {
                    setIsLoaded(true);
                    clearInterval(checkFirstChunk);
                }
            }, 100);
        }
    }, [resolvePath, frameCount]);

    useEffect(() => {
        loadChunk(0);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [loadChunk]);

    const drawFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const container = containerRef.current;
        const img = imagesRef.current[index];

        if (!container || !img) return false;
        if (!img.complete) return false;
        if (img.naturalWidth === 0) return true;

        const dpr = window.devicePixelRatio || 1;
        const rect = container.getBoundingClientRect();

        if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        } else {
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        const imgRatio = img.width / img.height;
        const canvasRatio = rect.width / rect.height;

        let renderWidth, renderHeight, offsetX, offsetY;
        if (canvasRatio > imgRatio) {
            renderWidth = rect.width;
            renderHeight = rect.width / imgRatio;
            offsetX = 0;
            offsetY = (rect.height - renderHeight) / 2;
        } else {
            renderHeight = rect.height;
            renderWidth = rect.height * imgRatio;
            offsetY = 0;
            offsetX = (rect.width - renderWidth) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
        return true;
    }, []);

    const animate = useCallback((time: number) => {
        if (!lastFrameTimeRef.current) lastFrameTimeRef.current = time;
        const deltaTime = time - lastFrameTimeRef.current;

        if (deltaTime >= frameInterval) {
            const currentIndex = frameIndexRef.current;
            const nextIndex = (currentIndex + 1) % frameCount;

            chunks.forEach((chunk, idx) => {
                if (currentIndex === chunk.loadTrigger && idx + 1 < chunks.length) {
                    loadChunk(idx + 1);
                }
            });

            const success = drawFrame(nextIndex);
            if (success) {
                frameIndexRef.current = nextIndex;
                lastFrameTimeRef.current = time - (deltaTime % frameInterval);
            }
        }
        requestRef.current = requestAnimationFrame(animate);
    }, [frameInterval, frameCount, drawFrame, loadChunk]);

    useEffect(() => {
        if (isLoaded) {
            lastFrameTimeRef.current = performance.now();
            requestRef.current = requestAnimationFrame(animate);
        }
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [isLoaded, animate]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
            <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} style={{ zIndex: 0 }}>
                <Image src={fallbackImage} alt="Hero Background" fill className="object-cover" priority />
            </div>
            <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ zIndex: 1 }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" style={{ zIndex: 2 }} />
            <div className="relative h-full w-full" style={{ zIndex: 10 }}>{children}</div>
        </section>
    );
}