export function formatDateStringToISODate(dateString: string) {
  // Проверяем, соответствует ли входная строка ожидаемому формату
  if (!/^\d{2}\.\d{2}\.\d{4}$/.test(dateString)) {
    throw new Error("Некорректный формат даты. Ожидается формат DD.MM.YYYY.");
  }

  const [day, month, year] = dateString.split(".");

  const isoString = `${year}-${month}-${day}`;

  return new Date(isoString);
}
