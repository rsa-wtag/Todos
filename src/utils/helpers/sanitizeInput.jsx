function sanitizeInput(input) {
  const sanitizedInput = input.replace(/<[^>]*>/g, "");
  const cleanedInput = sanitizedInput.replace(/[^\w\s]/gi, "");

  return cleanedInput;
}

export default sanitizeInput;
