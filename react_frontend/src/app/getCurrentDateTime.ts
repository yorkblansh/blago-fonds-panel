import date from 'date-and-time';

export const getCurrentDateTime = () => {
	return date.format(new Date(), 'DD/MM/YY HH:mm:ss');
};
