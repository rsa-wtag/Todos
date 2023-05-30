export const createDate = () => {
  const currentDate = new Date();
  return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${String(
    currentDate.getFullYear()
  ).slice(-2)}`;
};

export const sanitizeInput = (input) => {
  return input.replaceAll(/<\/?[^>]+(>|$)/gi, "").trim();
};
