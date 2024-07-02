import { useRef, useState, useEffect } from "react";
import { IStoryContent } from "../../interfaces";

export const AudioPlayer = ({ data }: { data: IStoryContent[] }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currtIdx, setCurrIdx] = useState<number>(0);

  const playNextSegment = () => {
    if (currtIdx < data.length) {
      const currentContent = data[currtIdx];
      if (audioRef.current) {
        audioRef.current.src = currentContent.voice_url;
        audioRef.current.play();
      }
    }
  };

  const handleAudioEnded = () => {
    if (currtIdx < data.length - 1) {
      setCurrIdx(currtIdx + 1);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.addEventListener('ended', handleAudioEnded);
      playNextSegment();
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ended', handleAudioEnded);
      }
    };
  }, [currtIdx]);

  return (
    <div>
      <audio ref={audioRef} />
    </div>
  );
};
