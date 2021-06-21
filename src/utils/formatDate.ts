export function formatDate(date: string) {
  return date
    .replace(/T.{0,}/g, "")
    .replace(/(\d{4})-(\d{2})-(\d{2})/g, "$3/$2/$1");
}
