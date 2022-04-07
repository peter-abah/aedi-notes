import { parseISO, format, isToday, isYesterday } from 'date-fns';

const formatDate = (date_str: string) => {
  const date = parseISO(date_str);
  if (isYesterday(date)) {
    return 'Yesterday' + format(date, 'p')
  } else if (isToday(date)) {
    return format(date, 'p')
  }
  
  return format(date, 'LLL d');
};

export default formatDate;