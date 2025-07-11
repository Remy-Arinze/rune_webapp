import React from 'react';

type Asset = {
  type: 'token' | 'nft';
  symbol?: string;
  name: string;
  balance?: string;
  id?: string;
  collection?: string;
};

interface AssetSelectorProps {
  title: string;
  value?: Asset;
  onChange: (asset: Asset) => void;
  tokens?: Asset[];
  nfts?: Asset[];
}

const AssetSelector: React.FC<AssetSelectorProps> = ({ 
  title, 
  value, 
  onChange, 
  tokens = [
    { type: 'token', symbol: "ETH", name: "Ethereum", balance: "1.42" },
    { type: 'token', symbol: "USDC", name: "USD Coin", balance: "250.00" },
    { type: 'token', symbol: "WBTC", name: "Wrapped Bitcoin", balance: "0.025" },
    { type: 'token', symbol: "CHESS", name: "Chess Token", balance: "5000" },
  ], 
  nfts = [
    { type: 'nft', id: "1", name: "Chess King NFT #1234", collection: "Chess Pieces" },
    { type: 'nft', id: "2", name: "Pawn #567", collection: "Chess Pieces" },
    { type: 'nft', id: "3", name: "Grandmaster Trophy #89", collection: "Tournament Awards" },
  ]
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-[12px] font-medium text-gray-300 mb-1">{title}</label>
      <select
        className="w-full p-2 bg-[var(--dark)] text-white text-[12px] border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
        onChange={(e) => {
          const selectedOption = JSON.parse(e.target.value);
          onChange(selectedOption);
        }}
        value={value ? JSON.stringify(value) : ''}
      >
        <option value="">Select an asset</option>
        <optgroup label="Tokens" className="bg-[var(--dark)]">
          {tokens.map((token) => (
            <option 
              key={`token-${token.symbol || token.name}`} 
              value={JSON.stringify(token)}
              className="bg-[var(--background)] text-white"
            >
              {token.name} ({token.symbol}) - Balance: {token.balance}
            </option>
          ))}
        </optgroup>
        <optgroup label="NFTs" className="bg-[var(--dark)]">
          {nfts.map((nft) => (
            <option 
              key={`nft-${nft.id || nft.name}`} 
              value={JSON.stringify(nft)}
              className="bg-[var(--background)] text-white"
            >
              {nft.name} ({nft.collection})
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

export default AssetSelector;