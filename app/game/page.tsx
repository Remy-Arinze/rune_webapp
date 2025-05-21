"use client"
import dynamic from 'next/dynamic';

// This tells Next.js to only load ChessGame in the browser, not on the server
const ChessGame = dynamic(
  () => import('./game_screen'),
  { ssr: false } // This is the key part!
);

export default function GamePage() {
  return <ChessGame />;
}