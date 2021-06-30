export function formatDate(date: string) {
  return (date = new Date(date).toLocaleDateString("pt-BR"));
}
