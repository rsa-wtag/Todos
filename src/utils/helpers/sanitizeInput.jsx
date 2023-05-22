function sanitizeInput(input) {
  // const sanitizedInput = input.replace(/<[^>]*>/g, "");
  // const cleanedInput = sanitizedInput.replace(/[^\w\s]/gi, "");

  return input.replaceAll(/<\/?[^>]+(>|$)/gi, "").trim();
}

export default sanitizeInput;
