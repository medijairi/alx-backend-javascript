export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }

  const len = startString.length;

  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(len))
    .join('-');
}
