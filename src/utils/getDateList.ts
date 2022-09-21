const getDateList = (month: string) => {
  const parsedMonth = month.split('월');
  const defaultDate = new Date();
  const dateObject = new Date(defaultDate.getFullYear(), parseInt(parsedMonth[0], 10), 0);
  const result = [];

  for (let i = 1; i <= dateObject.getDate(); i++) {
    result.push(`${i}일`);
  }

  return result;
};

export default getDateList;
