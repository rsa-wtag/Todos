export const createDate = () => {
  const currentDate = new Date();
  return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${String(
    currentDate.getFullYear()
  ).slice(-2)}`;
};

export const sanitizeInput = (input) => {
  return input.replaceAll(/<\/?[^>]+(>|$)/gi, "").trim();
};

export const timeToCompleteTask = (taskCreatedAt) => {
  const createdAt = parseDate(taskCreatedAt);
  const currentDate = new Date();
  const daysToComplete = differenceInDays(currentDate, createdAt);

  return daysToComplete;
};

function parseDate(dateString) {
  const parts = dateString.split(".");
  const day = parseInt(parts[0]);
  const month = parseInt(parts[1]) - 1;
  const year = 2000 + parseInt(parts[2]);

  return new Date(year, month, day);
}

function differenceInDays(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const diffMilliseconds = Math.abs(date1 - date2);

  return Math.round(diffMilliseconds / oneDay);
}
