export const searchToObject = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const result = {};
  for (const [key, value] of searchParams.entries()) {
    result[key] = value;
  }
  return result;
};
