export default function oneObjectToStyle(
  obj: Record<string, string | number>
): string {
  return Object.entries(obj)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => key + ": " + value + ";")
    .join(" ");
}
