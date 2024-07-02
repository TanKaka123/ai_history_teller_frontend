import React from "react";
import { Typography } from "antd";
import { IStoryContent } from "../../interfaces";

const { Text } = Typography;

export const SubtitleStory = ({ data }: { data: IStoryContent[] }) => {
  const subtitleContent = React.useMemo(() => {
    return data
      .map((content) => content.text.toString())
      .join(" ")
      .split(" ");
  }, [data]);

  const totalDuration = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.duration, 0);
  }, [data]);

  const totalWordPer10Second = Math.floor(
    (subtitleContent.length / totalDuration) * 10
  );

  const [startIndex, setStartIndex] = React.useState<number>(0);
  const [content, setContent] = React.useState(() => {
    return subtitleContent.slice(0, totalWordPer10Second).join(" ");
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newStartIndex = startIndex + totalWordPer10Second;
      setStartIndex(newStartIndex);
      setContent(
        subtitleContent
          .slice(newStartIndex, newStartIndex + totalWordPer10Second)
          .join(" ")
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [startIndex, subtitleContent, totalWordPer10Second]);

  return <Text className="text-white text-2xl line-clamp-2 text-center">{content}</Text>;
};
