import dayjs from "dayjs";

export const formatUnixDateTime = (
  unixTimestamp?: number,
  format: string = "mm:ss"
) => {
  return unixTimestamp && unixTimestamp !== 0
    ? dayjs.unix(unixTimestamp).format(format)
    : null;
};
