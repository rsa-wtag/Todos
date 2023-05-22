function sanitizeInput(input) {
  return input.replaceAll(/<\/?[^>]+(>|$)/gi, "").trim();
}

export default sanitizeInput;
