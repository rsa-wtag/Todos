export const createDate = () => {
  const currentDate = new Date();
  const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
  const formattedDate = currentDate
    .toLocaleDateString("en-UK", options)
    .replace(/\//g, ".");
  return formattedDate;
};
