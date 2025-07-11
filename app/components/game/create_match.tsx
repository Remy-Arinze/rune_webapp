import React, { useState } from 'react';
import Input from '../custom_input';
import GameButton from '../custom_button';

type GameType = 'instant' | 'scheduled';
type WagerType = {
  enabled: boolean;
  amount?: string;
  description?: string;
  assetType?: 'token' | 'nft';
  asset?: {
    type: 'token' | 'nft';
    symbol?: string;
    name: string;
    balance?: string;
    id?: string;
    collection?: string;
  };
};

const CreateMatch: React.FC = () => {
  const [gameType, setGameType] = useState<GameType>('instant');
  const [wager, setWager] = useState<WagerType>({ enabled: false });
  const [strictWager, setStrictWager] = useState<boolean>(false);
  const [privateGame, setprivateGame] = useState<boolean>(false);

  const handleWagerToggle = () => {
    setWager(prev => ({
      enabled: !prev.enabled,
      amount: !prev.enabled ? '' : prev.amount,
      description: !prev.enabled ? '' : prev.description
    }));
  };

  const handleWagerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWager(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mt-3 space-y-6">
      {/* Game Type Selection */}
      <div className="">
        <Input
          label='Game Type'
          className="w-full bg-red-500 p-2 rounded-md"
          value={gameType}
          type='select'
          options={[
            {label:'Instant Match',value:'instant'},
            {label:'Scheduled Match',value:'scheduled'},
          ]}
          onChange={(e) => setGameType(e.target.value as GameType)}
        />
      </div>

      {/* Scheduled Date (conditionally shown) */}
      {gameType === 'scheduled' && (
        <Input 
          type="datetime-local" 
          label="Event Date" 
          preventTextEdit 
        />
      )}

      {/* Time Control */}
      <Input 
        label='Time Control' 
        type='select' 
        options={[
          { value: "1|0", label: "1|0 - Bullet⚡" },
          { value: "2|1", label: "2|1 - Bullet⚡" },
          { value: "3|0", label: "3|0 - Blitz⏱️" },
          { value: "3|2", label: "3|2 - Blitz⏱️" },
          { value: "5|0", label: "5|0 - Blitz⏱️" },
          { value: "5|3", label: "5|3 - Blitz⏱️" },
          { value: "10|0", label: "10|0 - Rapid♟️" },
          { value: "10|5", label: "10|5 - Rapid♟️" },
          { value: "15|10", label: "15|10 - Rapid♟️" },
          { value: "30|0", label: "30|0 - Classical🏛️" },
          { value: "30|20", label: "30|20 - Classical🏛️" },
        ]}
      />

      {/* Game vis Toggle */}
      <div className="flex items-center justify-between">
         <div>
             <p className="text-[12px] font-medium text-gray-300 mb-1">Private Game</p>
              <p className='text-[10px] text-gray-500 w-50'>Your game can be seen and wagered on by only users you invite</p>
           </div>
        <Input
          type="toggle"
          checked={privateGame}
          handleToggle={() => setprivateGame(prev => !prev)}
        />
      </div>

      {/* Wager Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
           <div>
             <p className="text-[12px] font-medium text-gray-300 mb-1">Wager</p>
              <p className='text-[10px] text-gray-500 w-50'>Set the terms of this game, put something on the line </p>
           </div>
          <Input
            type="toggle"
            checked={wager.enabled}
            handleToggle={handleWagerToggle}
          />
        </div>
        
      {wager.enabled &&    <div className="flex items-center justify-between mt-5">
          <div>
             <p className="text-[12px] font-medium text-gray-300 mb-1">Strict Wager</p>
              <p className='text-[10px] text-gray-500 w-50'>If active, the invited user is not allowed to accept the wager request with a lesser asset </p>
           </div>
          <Input
            type="toggle"
            checked={strictWager}
            handleToggle={() => setStrictWager(prev => !prev)}
          />
        </div>}

        {/* Wager Details */}
        {wager.enabled && (
          <div className="mt-3 space-y-3 bg-[var(--dark)] rounded-md">
            {/* Combined Token/NFT Selector */}
            <div className="space-y-1">
              <label className="block text-[12px] font-medium text-gray-300 mb-1">Select Asset</label>
              <select
                className="w-full p-2 bg-[var(--background)] text-white text-[12px] border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                onChange={(e) => {
                  const selectedOption = JSON.parse(e.target.value);
                  setWager(prev => ({
                    ...prev,
                    assetType: selectedOption.type,
                    asset: selectedOption
                  }));
                }}
              >
                <option value="">Select an asset to wager</option>
                <optgroup label="Tokens" className="bg-[var(--dark)]">
                  {[
                    { type: 'token', symbol: "ETH", name: "Ethereum", balance: "1.42" },
                    { type: 'token', symbol: "USDC", name: "USD Coin", balance: "250.00" },
                    { type: 'token', symbol: "WBTC", name: "Wrapped Bitcoin", balance: "0.025" },
                    { type: 'token', symbol: "CHESS", name: "Chess Token", balance: "5000" },
                  ].map((token) => (
                    <option 
                      key={`token-${token.symbol}`} 
                      value={JSON.stringify(token)}
                      className="bg-[var(--background)] text-white"
                    >
                      {token.name} ({token.symbol}) - Balance: {token.balance}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="NFTs" className="bg-[var(--dark)]">
                  {[
                    { type: 'nft', id: "1", name: "Chess King NFT #1234", collection: "Chess Pieces" },
                    { type: 'nft', id: "2", name: "Pawn #567", collection: "Chess Pieces" },
                    { type: 'nft', id: "3", name: "Grandmaster Trophy #89", collection: "Tournament Awards" },
                  ].map((nft) => (
                    <option 
                      key={`nft-${nft.id}`} 
                      value={JSON.stringify(nft)}
                      className="bg-[var(--background)] text-white"
                    >
                      {nft.name} ({nft.collection})
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Conditional Amount Input */}
            {wager.assetType === 'token' && (
              <div className="space-y-1 mt-3">
                <label className="block text-[12px] font-medium text-gray-300">Wager Amount</label>
                <div className="relative">
                  <input
                    type="number"
                    name="amount"
                    placeholder="0.00"
                    className="w-full p-2 bg-[var(--background)] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] pl-12"
                    value={wager.amount || ''}
                    onChange={handleWagerChange}
                    step="any"
                    min="0"
                    max={wager.asset?.balance}
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[12px]">
                    {wager.asset?.symbol || 'Amount'}
                  </span>
                </div>
              </div>
            )}

            {/* Wager Description */}
            <div className="space-y-1 mt-3">
              <label className="block text-[12px] font-medium text-gray-300">Custom Message (Optional)</label>
              <Input 
                type='text'
                style={{ background: 'var(--background)' }}
                placeholder='I challenge you to a duel'
                className="w-full bg-[var(--background)] px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Create Button */}
      <GameButton className="w-full font-semibold">
        Start Match
      </GameButton>
    </div>
  );
};

export default CreateMatch;