"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface ImageSequenceHeroProps {
    folderPath: string;
    fileNamePrefix: string;
    fileExtension: string;
    frameCount: number;
    fps?: number;
    fallbackImage: string;
    children?: React.ReactNode;
}

export function ImageSequenceHero({
    folderPath,
    fileNamePrefix,
    fileExtension,
    frameCount,
    fps = 30,
    fallbackImage,
    children,
}: ImageSequenceHeroProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadError, setLoadError] = useState(false);

    // Refs for animation state to avoid re-renders
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const sequenceImagesRef = useRef<HTMLImageElement[]>([]);
    const requestRef = useRef<number | null>(null);
    const frameIndexRef = useRef(0);
    const lastFrameTimeRef = useRef(0);
    const frameInterval = 1000 / fps;

    // Preload images
    useEffect(() => {
        let isMounted = true;
        const preloadCount = Math.min(30, frameCount); // Preload first 30 frames before starting
        const images: HTMLImageElement[] = [];

        const loadNext = (index: number) => {
            if (!isMounted) return;

            const img = new window.Image();
            const frameNumber = (index + 1).toString().padStart(3, "0");
            img.src = `${folderPath}/${fileNamePrefix}${frameNumber}.${fileExtension}`;

            img.onload = () => {
                if (!isMounted) return;
                // Images are added to the general collection
            };

            img.onerror = () => {
                // Missing frames are handled by filtering later
            };

            images[index] = img;
        };

        // Initialize array
        for (let i = 0; i < frameCount; i++) {
            loadNext(i);
        }
        imagesRef.current = images;

        // Check loading status
        const checkLoading = setInterval(() => {
            let readyCount = 0;
            for (let i = 0; i < preloadCount; i++) {
                if (images[i] && (images[i].complete || images[i].naturalWidth > 0)) {
                    readyCount++;
                }
            }

            if (readyCount >= Math.min(5, preloadCount)) {
                sequenceImagesRef.current = images.filter(img => img && img.complete && img.naturalWidth > 0);

                if (sequenceImagesRef.current.length > 0) {
                    setIsLoaded(true);
                    clearInterval(checkLoading);
                }
            }
        }, 100);

        // Periodically refresh the sequence as more images load in the background
        const refreshSequence = setInterval(() => {
            if (isMounted) {
                sequenceImagesRef.current = images.filter(img => img && img.complete && img.naturalWidth > 0);
            }
        }, 2000);

        // Fallback timeout
        const timeout = setTimeout(() => {
            if (!isLoaded) {
                setLoadError(true);
            }
        }, 5000);

        return () => {
            isMounted = false;
            clearInterval(checkLoading);
            clearInterval(refreshSequence);
            clearTimeout(timeout);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [folderPath, fileNamePrefix, fileExtension, frameCount, fps, isLoaded]);

    // Draw frame logic
    const drawFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const container = containerRef.current;
        const sequence = sequenceImagesRef.current;

        if (sequence.length === 0) return;

        const img = sequence[index % sequence.length];

        if (!canvas || !ctx || !img || !container) return;

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
    }, []);

    // Animation Loop
    const animate = useCallback((time: number) => {
        if (!lastFrameTimeRef.current) lastFrameTimeRef.current = time;

        const deltaTime = time - lastFrameTimeRef.current;

        if (deltaTime >= frameInterval) {
            const seqLength = sequenceImagesRef.current.length;
            if (seqLength > 0) {
                drawFrame(frameIndexRef.current);
                frameIndexRef.current = (frameIndexRef.current + 1) % seqLength;
            }
            lastFrameTimeRef.current = time - (deltaTime % frameInterval);
        }

        requestRef.current = requestAnimationFrame(animate);
    }, [frameInterval, drawFrame]);

    // Start animation when loaded
    useEffect(() => {
        if (isLoaded && !loadError) {
            requestRef.current = requestAnimationFrame(animate);
        }
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [isLoaded, loadError, animate]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded && !loadError) {
                drawFrame(frameIndexRef.current);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, loadError, drawFrame]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
            <div
                className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded && !loadError ? 'opacity-0' : 'opacity-100'}`}
                style={{ zIndex: 0 }}
            >
                <Image
                    src={fallbackImage}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <canvas
                ref={canvasRef}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isLoaded && !loadError ? 'opacity-100' : 'opacity-0'}`}
                style={{ zIndex: 1 }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" style={{ zIndex: 2 }} />

            <div className="relative h-full w-full" style={{ zIndex: 10 }}>
                {children}
            </div>
        </section>
    );
}
