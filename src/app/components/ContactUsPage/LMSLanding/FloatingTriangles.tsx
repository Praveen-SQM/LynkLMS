"use client"
import React, { useEffect, useState } from "react";
import triangle from "@/utills/images/Polygon 2.svg";
import Image from "next/image";

interface Triangle {
  id: number;
  size: number;
  left: number;
  image: string;
  top: number;
  rotation: number;
  duration: number;
  delay: number;
}

export const FloatingBackground: React.FC = () => {
  const [triangles, setTriangles] = useState<Triangle[]>([]);

  useEffect(() => {
    const generateTriangles = (): void => {
      const newTriangles: Triangle[] = [];
      for (let i = 0; i < 6; i++) {
        newTriangles.push({
          id: i,
          image: triangle,
          size: Math.random() * 100 + 50, // Random size between 50-150px
          left: Math.random() * 100, // Random position (percentage)
          top: Math.random() * 100,
          rotation: Math.random() * 360,
          duration: Math.random() * 20 + 20, // Animation duration 20-40s
          delay: Math.random() * -20, // Random start time
        });
      }
      setTriangles(newTriangles);
    };

    generateTriangles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {triangles.map((triangle) => (
        <Image
          height={triangle.size}
          width={triangle.size}
          alt="triangle"
          key={triangle.id}
          src={triangle.image}
          className="absolute"
          style={{
            left: `${triangle.left}%`,
            top: `${triangle.top}%`,
            transform: `rotate(${triangle.rotation}deg)`,
            animation: `float-${triangle.id} ${triangle.duration}s infinite linear`,
            animationDelay: `${triangle.delay}s`,
          }}
        ></Image>
      ))}
      <style>
        {triangles
          .map(
            (triangle) => `
          @keyframes float-${triangle.id} {
            0% {
              transform: translate(0, 0) rotate(${triangle.rotation}deg);
            }
            25% {
              transform: translate(${Math.random() * 100 - 50}px, ${
              Math.random() * 100 - 50
            }px) rotate(${triangle.rotation + 90}deg);
            }
            50% {
              transform: translate(${Math.random() * 100 - 50}px, ${
              Math.random() * 100 - 50
            }px) rotate(${triangle.rotation + 180}deg);
            }
            75% {
              transform: translate(${Math.random() * 100 - 50}px, ${
              Math.random() * 100 - 50
            }px) rotate(${triangle.rotation + 270}deg);
            }
            100% {
              transform: translate(0, 0) rotate(${triangle.rotation + 360}deg);
            }
          }
        `
          )
          .join("")}
      </style>
    </div>
  );
};
