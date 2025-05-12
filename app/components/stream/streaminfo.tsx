import { StreamInfoProps } from "@/app/account/types/stream_types";

const StreamInfo = ({ title, streamer, }: StreamInfoProps) => {
  return (
    <div className="px-4 border-b border-gray-700 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-bold">{title}</h1>
        <p className=" text-[13px] text-gray-400">Streamer: {streamer}</p>
      </div>
      {/* <button
        onClick={onTogglePlayPause}
        className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2"
      >
        {isPlaying ? (
          <>
            <span>⏸️</span>
            <span>Pause</span>
          </>
        ) : (
          <>
            <span>▶️</span>
            <span>Play</span>
          </>
        )}
      </button> */}
    </div>
  );
};

export default StreamInfo;