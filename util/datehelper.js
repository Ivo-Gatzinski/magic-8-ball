function formatDate(date) {
  // use JavaScript Date methods to get month, date, and year

  // add 1 to month because JavaScript uses a zero-based value for the month (January -> 0)
  const month = date.getMonth() + 1;

  const day = date.getDay();

  // Add 5 years to get the end date for the exhibition
  const year = date.getFullYear();

  // Return a string formatted as M/D/YYYY
  return `${month}/${day}/${year}`;
}

module.exports = formatDate();
