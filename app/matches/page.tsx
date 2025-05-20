'use client'
import React, { useState } from 'react';
import { FaCrown } from 'react-icons/fa';
import MatchesTournamentCard from '../components/matches/matches_tournaments_car';
import { Tournament } from '@/utils/tournaments';
import { HorizontalScrollContainer } from '../components/horizontal_scroll';
import MatchRow from '../components/matches/matchrow';
import SelectedBetsPanel from '../components/matches/selected_bets';
import { SelectedBets, Wager } from '../components/matches/types';
import ChessPieceIcon from '../components/matches/chesspiece_icon';
import { RiSwordLine } from 'react-icons/ri';

const Matches: React.FC = () => {
  const [selectedBets, setSelectedBets] = useState<SelectedBets>({});
  // Tournament data
  const tournaments: Tournament[] = [
    {
      id: '1',
      title: 'World Series Chess 2025',
      status: 'live',
      prizePool: '500 RUNE',
      participants: 24,
      maxParticipants: 32
    },
    {
      id: '2',
      title: 'Grandmaster Blitz Championship',
      status: 'upcoming',
      prizePool: '300 RUNE',
      participants: 18,
      maxParticipants: 24
    },
    {
      id: '3',
      title: 'Rapid Chess Open',
      status: 'upcoming',
      prizePool: '250 RUNE',
      participants: 12,
      maxParticipants: 16
    },
    {
      id: '4',
      title: 'Bullet Chess Tournament',
      status: 'completed',
      prizePool: '200 RUNE',
      participants: 32,
      maxParticipants: 32
    }
  ];

  // Wager data with more dummy matches
  const wagers: Wager[] = [
    {
      id: 1,
      player_one: "0x_Ra",
      player_two: "0x_Dann",
      time_remaining: "1:34:00",
      game_type: "Blitz",
      bets: {
        match_winner: {
          title: "Match Winner",
          options: [
            { label: "1Win", odds: "19/1", icon: <ChessPieceIcon piece="King" /> },
            { label: "2Win", odds: "29/100", icon: <ChessPieceIcon piece="King" /> }
          ]
        },
        piece_loss: {
          title: "First Piece Lost",
          options: [
            { label: "Queen", odds: "20/1", icon: <ChessPieceIcon piece="Queen" /> },
            { label: "Knight", odds: "10/1", icon: <ChessPieceIcon piece="Knight" /> },
            { label: "Bishop", odds: "8/1", icon: <ChessPieceIcon piece="Bishop" /> }
          ]
        }
      }
    },
    {
      id: 2,
      player_one: "0x_Kasparov",
      player_two: "0x_Carlsen",
      time_remaining: "2:15:00",
      game_type: "Classical",
      bets: {
        match_winner: {
          title: "Match Winner",
          options: [
            { label: "Win", odds: "5/2", icon: <ChessPieceIcon piece="King" /> },
            { label: "Draw", odds: "3/1", icon: <ChessPieceIcon piece="Pawn" /> },
            { label: "Win", odds: "4/7", icon: <ChessPieceIcon piece="King" /> }
          ]
        },
        checkmate_type: {
          title: "Checkmate Type",
          options: [
            { label: "Classic", odds: "3/1", icon: <ChessPieceIcon piece="King" /> },
            { label: "pawn", odds: "50/1", icon: <ChessPieceIcon piece="Pawn" /> }
          ]
        }
      }
    },
    {
      id: 3,
      player_one: "0x_Nakamura",
      player_two: "0x_Firouzja",
      time_remaining: "0:45:00",
      game_type: "Bullet",
      bets: {
        match_winner: {
          title: "Match Winner",
          options: [
            { label: "Win", odds: "7/2", icon: <ChessPieceIcon piece="King" /> },
            { label: "Draw", odds: "10/1", icon: <ChessPieceIcon piece="Pawn" /> },
            { label: "Win", odds: "1/3", icon: <ChessPieceIcon piece="King" /> }
          ]
        },
        move_count: {
          title: "Total Moves",
          options: [
            { label: "Under 30", odds: "2/1", icon: <ChessPieceIcon piece="Default" /> },
            { label: "30-50", odds: "3/1", icon: <ChessPieceIcon piece="Default" /> }
          ]
        }
      }
    },
    {
      id: 4,
      player_one: "0x_Caruana",
      player_two: "0x_Ding",
      time_remaining: "3:00:00",
      game_type: "Classical",
      bets: {
        match_winner: {
          title: "Match Winner",
          options: [
            { label: "Win", odds: "2/1", icon: <ChessPieceIcon piece="King" /> },
            { label: "Draw", odds: "5/2", icon: <ChessPieceIcon piece="Pawn" /> },
            { label: "Win", odds: "2/3", icon: <ChessPieceIcon piece="King" /> }
          ]
        },
        piece_loss: {
          title: "First Piece Lost",
          options: [
            { label: "Rook", odds: "7/1", icon: <ChessPieceIcon piece="Rook" /> },
            { label: "Pawn", odds: "1/2", icon: <ChessPieceIcon piece="Pawn" /> }
          ]
        }
      }
    }
  ];

  const handleBetSelection = (matchId: number, betType: string, optionIndex: number) => {
    const wager = wagers.find(w => w.id === matchId);
    if (!wager) return;

    setSelectedBets(prev => ({
      ...prev,
      [matchId]: {
        ...prev[matchId],
        [betType]: {
          optionIndex,
          odds: wager.bets[betType].options[optionIndex].odds,
          matchInfo: {
            playerOne: wager.player_one,
            playerTwo: wager.player_two,
            betType: wager.bets[betType].title
          }
        }
      }
    }));
  };

  const removeBet = (matchId: number, betType: string) => {
    setSelectedBets(prev => {
      const newBets = { ...prev };
      if (newBets[matchId]) {
        delete newBets[matchId][betType];
        if (Object.keys(newBets[matchId]).length === 0) {
          delete newBets[matchId];
        }
      }
      return newBets;
    });
  };

  const clearAllBets = () => {
    setSelectedBets({});
  };

  return (
    <div className="h-[80dvh] overflow-y-scroll no-scrollbar pr-10">
      {/* Tournaments Section */}
      <section className="mb-8">
        <h2 className="flex items-center text-md font-semibold mb-4">
          <FaCrown className="text-[var(--primary)] mr-2" />
          Featured Tournaments
        </h2>
        <HorizontalScrollContainer className="no-scrollbar">
          {tournaments.map(tournament => (
            <MatchesTournamentCard key={tournament.id} 
            id={tournament.id} 
            title={tournament.title} 
            status={'live'} prizePool={tournament.prizePool ?? ''} 
            participants={tournament.participants} 
            maxParticipants={tournament.maxParticipants ?? 0} />
          ))}
        </HorizontalScrollContainer>
      </section>

      {/* Matches Section */}
      <section>
        <h2 className="flex items-center text-md font-semibold mb-4">
          <RiSwordLine className="text-[var(--primary)] mr-2" />
          Live Matches
        </h2>
        
        <div className="bg-[var(--dark)] rounded-xl border border-gray-800 overflow-hidden">
          {wagers.map(wager => (
            <MatchRow 
              key={wager.id}
              wager={wager}
              selectedBets={selectedBets}
              onSelectBet={handleBetSelection}
            />
          ))}
        </div>
      </section>

      {/* Selected Bets Panel */}
      <SelectedBetsPanel
        selectedBets={selectedBets}
        wagers={wagers}
        onRemoveBet={removeBet}
        onClearAll={clearAllBets}
      />
    </div>
  );
};

export default Matches;