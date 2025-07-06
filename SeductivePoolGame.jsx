import { useState } from "react";

const BALL_ACTIONS = {
  1: "1-minute sensual kissing session – slow, soft, passionate.",
  2: "Remove 1 item of clothing with eye contact.",
  3: "Whisper one of your sexiest fantasies in her ear.",
  4: "Tease her with a feather, ice cube, or fingertips (2 mins).",
  5: "Give or receive a lap dance (1 min, slow grind).",
  6: "Tie them up (with scarf or handcuffs) for 2 mins of teasing.",
  7: "Use your mouth only to drive them wild for 1 minute.",
  9: "3 slow, teasing kisses down their stomach.",
  10: "They must call you by a sexy nickname and obey 1 command.",
  11: "Explore them blindfolded for 2 minutes. No speaking allowed.",
  12: "1-minute spanking session (soft or hard – winner’s choice).",
  13: "Pour warm oil or lotion and massage wherever you choose.",
  14: "Give or receive oral teasing – 30 seconds, no release.",
  15: "One wild kiss followed by a whispered demand in their ear."
};

const FOULS = [
  "Strip down to nothing but socks.",
  "Moan their name seductively.",
  "Crawl to them and beg for a kiss.",
  "Get on all fours and stay that way for 2 minutes.",
  "Let them choose a toy and how to use it."
];

const SeductivePoolGame = () => {
  const [selectedBall, setSelectedBall] = useState(null);
  const [stripCounter, setStripCounter] = useState(0);
  const [foulAction, setFoulAction] = useState(null);
  const [showFantasy, setShowFantasy] = useState(false);

  const handleBallClick = (ball) => {
    setSelectedBall(ball);
    setFoulAction(null);
    setShowFantasy(false);
    setStripCounter((prev) => prev + 1);
  };

  const handleFoul = () => {
    const punishment = FOULS[Math.floor(Math.random() * FOULS.length)];
    setFoulAction(punishment);
    setSelectedBall(null);
    setShowFantasy(false);
  };

  const handleEightBall = () => {
    setSelectedBall(null);
    setFoulAction(null);
    setShowFantasy(true);
  };

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center">Seductive 8-Ball Pool Game</h1>

      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15].map((ball) => (
          <button key={ball} onClick={() => handleBallClick(ball)}>{ball}</button>
        ))}
      </div>

      <button onClick={handleFoul}>Foul 😈</button>
      <button onClick={handleEightBall}>Sink 8-Ball 🎱</button>

      {selectedBall && (
        <div className="p-4 bg-pink-900 rounded-lg shadow">
          Ball {selectedBall}: {BALL_ACTIONS[selectedBall]}
        </div>
      )}

      {foulAction && (
        <div className="p-4 bg-red-800 rounded-lg shadow">
          Foul Punishment: {foulAction}
        </div>
      )}

      {stripCounter > 0 && stripCounter % 2 === 0 && (
        <div className="p-4 bg-yellow-700 font-bold text-white rounded-lg">
          🔥 Time to remove 1 item of clothing!
        </div>
      )}

      {showFantasy && (
        <div className="p-4 bg-purple-800 font-bold text-white rounded-lg">
          🎱 8-Ball Winner's Fantasy: You get full sexual control for 5 minutes – choose their position, pace, or act out a wild fantasy.
        </div>
      )}
    </div>
  );
};

export default SeductivePoolGame;
