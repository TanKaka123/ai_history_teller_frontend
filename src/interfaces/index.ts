export interface ISummary {
  context: string,
  historical_significance: string,
  main_happenings: string,
  result: string
}

export interface IQuestionaire {
  question: string,
  options: string[],
  answer: number
}

export interface IStoryContent {
  text: string;
  voice_url: string;
  fpt_url: string;
  duration: number;
  end_time: number;
  start_time: number;
  img_url: string,
}


export interface IHistoryTeller {
  content: IStoryContent[],
  imgs: string[],
  questionaire: IQuestionaire[],
  summary: ISummary
}