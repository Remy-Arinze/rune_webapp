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
  imageSrc,
  participants,
  className = "",
}) => {
  return (
    <Link href={`/tournaments/${id}`}>
     <div className="transition-transform hover:scale-105">
       <div className={cn("relative w-[150px] h-[180px] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer flex item-center justify-center", className)}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            quality={50}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full p-4 flex flex-col justify-center items-center">
          {/* Top Section */}
        <p className="absolute top-1 right-1 text-[10px] font-bold text-[var(--primary)]">10,0000 RUNE </p>
          {/* Bottom Section */}
          <div className="">
            <h3 className="text-2xl text-center font-bold text-white">{title}</h3>
            <p className="text-[10px] text-center mt-2 text-gray-400">HACKSAW GAMING</p>
          </div>
        </div>

      </div>
      <div>
         <div className="flex items-center space-x-2">
              <p className="text-[10px] text-orange-400 flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2" />
                {participants} <span className="ml-1 text-gray-500">playing</span>
              </p>
            </div>
      </div>
     </div>
    </Link>
  );
};