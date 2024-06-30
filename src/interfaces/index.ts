export interface IHistoryTeller {
  content: {
    text: string,
    voice_url: string,
    fpt_url: string,
    img_url: string,
    duration: number,
    start_time: number,
    end_time: number
  }[],
  imgs: string[],
  questionaire: {
    question: string,
    options: string[],
    answer: number
  }[],
  summary: {
    context: string,
    historical_significance: string,
    main_happenings: string,
    result: string
  }
}