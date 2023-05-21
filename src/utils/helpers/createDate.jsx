export const createDate = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}.${
    currentDate.getMonth() + 1
  }.${String(currentDate.getFullYear()).slice(-2)}`;
  return formattedDate;
};
