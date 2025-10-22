import { useEffect, useRef, useState } from "react";

export default function MusicButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  // Keep UI in sync with media events
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    const onPlay = () => { setIsPlaying(true); setLoading(false); };
    const onPause = () => setIsPlaying(false);
    const onWaiting = () => setLoading(true);
    const onCanPlay = () => setLoading(false);

    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    a.addEventListener("waiting", onWaiting);
    a.addEventListener("canplay", onCanPlay);

    return () => {
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
      a.removeEventListener("waiting", onWaiting);
      a.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  const togglePlay = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (a.paused) {
        setLoading(true);
        a.preload = "auto";
        a.loop = true;
        a.volume = 0.9;
        await a.play();
      } else {
        a.pause();
      }
    } catch (err) {
      setLoading(false);
      // Most common cause: gesture not recognized; try another tap.
      console.warn("Audio play failed:", err?.name, err?.message);
    }
  };

  return (
    <div className="inline-flex items-center gap-3">
      {/* Base URL fixed for your /swarajdev deployment */}
      <audio
        ref={audioRef}
        src="/swarajdev/harrypotter.mp3"
        preload="none"
      />

      <button
        onClick={togglePlay}
        type="button"
        className="group inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white transition hover:bg-white/[0.06] active:scale-[0.99]"
        aria-pressed={isPlaying}
      >
        {/* Icon */}
        <span className="relative inline-flex h-5 w-5 items-center justify-center">
          {isPlaying ? (
            // Pause icon
            <span className="relative flex h-3.5 w-3.5 items-center justify-between">
              <span className="h-full w-[3px] bg-white/90 rounded-[1px]" />
              <span className="h-full w-[3px] bg-white/90 rounded-[1px]" />
            </span>
          ) : (
            // Play icon
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-white/90">
              <path fill="currentColor" d="M8 5v14l11-7z" />
            </svg>
          )}

          {/* Tiny equalizer when playing */}
          <span
            className={`absolute -right-20 top-1/2 -translate-y-1/2 hidden md:flex gap-[2px] transition-opacity ${isPlaying ? "opacity-100" : "opacity-0"}`}
            aria-hidden
          >
            <span className="w-[2px] bg-emerald-400 animate-[pulse_700ms_ease-in-out_infinite] h-2" />
            <span className="w-[2px] bg-emerald-400 animate-[pulse_900ms_ease-in-out_infinite] h-3" />
            <span className="w-[2px] bg-emerald-400 animate-[pulse_800ms_ease-in-out_infinite] h-2.5" />
          </span>
        </span>

        <span className="select-none">{isPlaying ? "Pause" : "Play"}</span>
        {loading && <span className="ml-1 text-white/50 text-xs">(loading…)</span>}
      </button>
    </div>
  );
}
