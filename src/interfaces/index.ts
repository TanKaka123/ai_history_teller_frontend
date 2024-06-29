export interface IVideoListItem {
  id: number;
  title: string;
  thumbnail: string;
  authorName: string;
  authorAva: string;
  createdDate: number;
  viewCount: number;
  link: string;
}

export interface INation {
  id: number;
  name: string;
}

export interface IStoryContent {
  text: string;
  fpt_url: string;
  duration: number;
  end_time: number;
  voice_url: string;
  start_time: number;
}

export interface IStory {
  title: string;
  imgs: string[];
  content: IStoryContent[];
}
