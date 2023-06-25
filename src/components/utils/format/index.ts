import { DateTime } from "luxon";

export function KebabCase(string: string): string {
  return string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

export function svgStringToUrl(string: string): string {
  const blob = new Blob([string], { type: "image/svg+xml" });
  return URL.createObjectURL(blob);
}

export function FormatedDate(unixTime: string): string {
  return DateTime.fromISO(
    new Date(Number(unixTime)).toISOString()
  ).toLocaleString(DateTime.DATE_FULL);
}
