import { useRef, useState } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch (error) {
      console.error("Music playback error:", error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/anniversary.mp3"
        loop
        preload="auto"
      />

      <button
        className={`music-button ${playing ? "playing" : ""}`}
        onClick={toggleMusic}
        aria-label="Music Player"
      >
        {playing ? "⏸" : "🎵"}
      </button>
    </>
  );
}

export default MusicPlayer;