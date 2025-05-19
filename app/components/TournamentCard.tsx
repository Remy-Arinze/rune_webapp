import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface TournamentCardProps {
  id: string;
  title: string;
  description?: string;
  status: "live" | "upcoming" | "completed";
  imageSrc: string;
  participants: number;
  prizePool?: string;
  className?: string;
}

export const TournamentCardComponent: React.FC<TournamentCardProps> = ({
  id,
  title,
  status,
  imageSrc,
  participants,
  className = "",
}) => {
  return (
    <Link href={`/tournaments/${id}`}>
      <div className={cn("relative w-[280px] h-[320px] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer transition-transform hover:scale-105", className)}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            quality={90}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full p-4 flex flex-col justify-between">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div className="bg-black/50 backdrop-blur-sm rounded px-2 py-1">
              <span className="text-xl font-bold">1</span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-emerald-400 flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2" />
                {participants} playing
              </p>
            </div>
            <p className="text-sm text-gray-300">HACKSAW GAMING</p>
          </div>
        </div>
      </div>
    </Link>
  );
};