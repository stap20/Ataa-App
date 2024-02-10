export default function formatArabicDate(date) {
  const options = {
    weekday: "long", // Full name of the day of the week
    day: "numeric", // Numeric day of the month
    month: "long", // Full name of the month
    year: "numeric", // Numeric year
    locale: "ar", // Arabic locale
  };

  // Create a formatted date string using the Intl.DateTimeFormat object
  return new Intl.DateTimeFormat('ar', options).format(date);
}
