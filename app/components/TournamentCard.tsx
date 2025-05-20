import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Trophy, Users } from "lucide-react"; // Gamified icons

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
  // participants,
  prizePool = "0 RUNE",
  status,
  className = "",
}) => {
  const getStatusColor = () => {
    switch (status) {
      case "live":
        return "bg-red-500 animate-pulse";
      case "upcoming":
        return "bg-yellow-400";
      case "completed":
        return "bg-gray-500";
    }
  };

  return (
    <Link href={`/tournaments/${id}`}>
      <div className="transition-transform hover:scale-105">
        <div
          className={cn(
            "relative w-[160px] h-[200px] rounded-xl overflow-hidden flex-shrink-0 cursor-pointer flex items-center justify-center shadow-xl border border-white/10 backdrop-blur-xl",
            className
          )}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              quality={60}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </div>

          {/* Tournament Status Badge */}
          <div className="absolute top-2 left-2 flex items-center space-x-1">
            <span className={`w-2 h-2 rounded-full ${getStatusColor()}`} />
            <p className="text-[10px] uppercase text-white font-semibold tracking-wider">
              {status}
            </p>
          </div>

          {/* Prize Info */}
          <div className="absolute top-5 right-2 flex items-center space-x-1 bg-black/60 px-2 py-[2px] rounded-full">
            <Trophy size={12} className="text-yellow-400" />
            <p className="text-[10px] text-yellow-300 font-bold">{prizePool}</p>
          </div>

          {/* Title & Description */}
          <div className="relative h-full w-full px-3 pb-3 flex flex-col justify-end items-center text-center">
            <h3 className="text-white text-[1rem] font-extrabold">{title}</h3>
            <p className="text-gray-400 text-[10px] mt-1">HackSaw Gaming</p>
          </div>
        </div>

        {/* Participants */}
        <div className="mt-2 flex items-center justify-center space-x-1 text-gray-300 text-[11px]">
          <Users size={12} className="text-orange-400" />
          <span className="text-orange-400 font-semibold">16/32</span>
          <span className="text-gray-500">playing</span>
        </div>
      </div>
    </Link>
  );
};
