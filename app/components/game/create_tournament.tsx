import React, { useState } from 'react';
import Input from '../custom_input';
import GameButton from '../custom_button';
import AssetSelector from './asset_selector';

interface TournamentAsset {
  type: 'token' | 'nft';
  symbol?: string;
  name: string;
  balance?: string;
  id?: string;
  collection?: string;
}

const CreateTournament: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [entryFee, setEntryFee] = useState('');
  const [playerCount, setPlayerCount] = useState('8');
  const [stakeAsset, setStakeAsset] = useState<TournamentAsset | null>(null);
  const [isPrivate, setIsPrivate] = useState(false);
  const [timeControl, setTimeControl] = useState('5|0');
  const [isRated, setIsRated] = useState(true);

  const playerOptions = [ 8, 16, 32,64].map(num => ({
    value: num.toString(),
    label: `${num} Players`
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle tournament creation logic
    console.log({
      name,
      description,
      entryFee,
      playerCount,
      stakeAsset,
      isPrivate,
      timeControl,
      isRated
    });
  };

  return (
    <div className="mt-3">
      {/* Epic Description */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Tournament Name */}
        <Input
          type="text"
          label="Tournament Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Grandmaster Showdown"
          style={{ background: 'var(--dark)' }}
          required
        />

        {/* Tournament Description */}
        <Input
          type="textarea"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your tournament..."
          style={{ background: 'var(--dark)' }}
          rows={3}
        />

        {/* Entry Fee */}
        <Input
          type="number"
          label="Entry Fee"
          value={entryFee}
          onChange={(e) => setEntryFee(e.target.value)}
          placeholder="0.00"
          style={{ background: 'var(--dark)' }}
          min="0"
          step="0.01"
        />

        {/* Number of Players */}
        <Input
          type="select"
          label="Number of Players"
          value={playerCount}
          onChange={(e) => setPlayerCount(e.target.value)}
          options={playerOptions}
          style={{ background: 'var(--dark)' }}
        />

        {/* Time Control */}
        <Input
          type="select"
          label="Time Control"
          value={timeControl}
          onChange={(e) => setTimeControl(e.target.value)}
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
          style={{ background: 'var(--dark)' }}
        />

        {/* Tournament Stake */}
        <AssetSelector 
          title="Tournament Stake" 
          onChange={setStakeAsset} 
          value={stakeAsset || undefined}
        />

        {/* Tournament Settings */}
        <div className="space-y-4">
          {/* Privacy Toggle */}
          <div className="flex items-center justify-between">
           <div>
             <p className="text-[12px] font-medium text-gray-300 mb-1">Private Tournament</p>
              <p className='text-[10px] text-gray-500 w-50'>Only participators you invite can play and wager in this tournament</p>
           </div>
              <Input
                type="toggle"
                checked={isPrivate}
                handleToggle={() => setIsPrivate(prev => !prev)}
              />
              
            </div>

          {/* Rated Toggle */}
          <div className="flex items-center justify-between">
   <div>
             <p className="text-[12px] font-medium text-gray-300 mb-1">Rated Tournament</p>
              <p className='text-[10px] text-gray-500 w-50'>Will points gained in tournament be added to players general rating</p>
           </div>           
            <Input
              type="toggle"
              checked={isRated}
              handleToggle={() => setIsRated(prev => !prev)}
            />
          </div>
        </div>

        {/* Create Button */}
        <GameButton className="w-full font-semibold">
          Create Tournament
        </GameButton>
      </form>
    </div>
  );
};

export default CreateTournament;