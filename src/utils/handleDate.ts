import dayjs from "dayjs";

export const getRelativeTime = (uploadDate: string) => {
  const currentDate = dayjs();
  const uploadedTime = dayjs(uploadDate);
  const diffInDays = currentDate.diff(uploadDate, "day");

  if (diffInDays <= 0) {
    return currentDate.diff(uploadDate, "hour") + "시간 전";
  } else if (diffInDays === 1) {
    return "어제";
  } else if (diffInDays < 30) {
    return diffInDays + "일 전";
  } else {
    return uploadedTime.format("YYYY-MM-DD HH:mm:ss");
  }
};
