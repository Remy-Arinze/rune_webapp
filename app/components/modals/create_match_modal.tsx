import React from 'react';
import { CustomTabs } from '../tab_component';
import CreateMatch from '../game/create_match';
import CreateTournament from '../game/create_tournament';


const CreateGame: React.FC = () => {
  return (
    <div className="max-w-2xl overflow-y-scroll no-scrollbar max-h-[400px] mx-auto p-6 bg-[var(--dark)] rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-300 mb-6">Forge a New Legend</h1>
      
      <CustomTabs
        hasBackgroundColor={false}
        tabs={[
          { label: "⚔️ Match", value: "match" },
          { label: "🏆 Tournament", value: "tournament" },
        ]}
      >
        <CreateMatch />
        <CreateTournament />
      </CustomTabs>
    </div>
  );
};

export default CreateGame;