module.exports = {
    // The custom helper 'format_date' takes in a timestamp
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
          new Date(date).getFullYear()} ${new Date(date).toLocaleTimeString()}
        `;
      }
  };