import { femaleNames, femaleMiddlenames, femaleSurnames, maleNames, maleMiddlenames, maleSurnames} from './names.js';
import { getRandomNumber } from './random-number.js';

const genders = ['м', 'ж'];

export function getRandomGender() {
	return genders[getRandomNumber(0, 1)];
};

export function getRandomName(gender) {
	let name, middlename, surname;
	switch(gender) {
		case 'ж':
			name = femaleNames[getRandomNumber(0, femaleNames.length - 1)];
			middlename = femaleMiddlenames[getRandomNumber(0, femaleMiddlenames.length - 1)];
			surname = femaleSurnames[getRandomNumber(0, femaleSurnames.length - 1)];
			break;
		case 'м':
			name = maleNames[getRandomNumber(0, maleNames.length - 1)];
			middlename = maleMiddlenames[getRandomNumber(0, maleMiddlenames.length - 1)];
			surname = maleSurnames[getRandomNumber(0, maleSurnames.length - 1)];
			break;
	}
	return `${name} ${middlename} ${surname}`;
};

export function getRandomPhoneNumber() {
	const bodyNumber = [];
	for (let i = 0; i < 10; i +=1) {
		const randomNum = getRandomNumber(0, 9);
		bodyNumber.push(randomNum);
	}
	return `7${bodyNumber.join('')}`;
};

export function getClientCode(previous, beforePrevious) {
	switch(previous) {
		case 'Код клиента;':
			return 1;
		case 1:
			return 2;
		default:
			return previous + beforePrevious;
	}
};

export function getRandomBirthDate() {
	const day = getRandomNumber(1, 31);
	const month = getRandomNumber(1, 12);
	const year = getRandomNumber(1970, 2000);
	if (day < 10 && month < 10) {
		return `0${month}.0${day}.${year}`;
	} else if (day < 10) {
		return `${month}.0${day}.${year}`;
	} else if (month < 10) {
		return `0${month}.${day}.${year}`;
	} else {
		return `${month}.${day}.${year}`;
	}
};

function isYearLeap(year) {
	// If a year is multiple of 400, then it is a leap year
	if (year % 400 == 0)
		return true;
	// Else If a year is multiple of 100, then it is not a leap year
	else if (year % 100 == 0)
		return false;
	// Else If a year is multiple of 4, then it is a leap year
	else if (year % 4 == 0)
		return true;
	return false;
}

function getNumberOfLeapYears(startYear, endYear) {
	let numberOfLeapYears = 0;
	for (let i = startYear; i <= endYear; i += 1) {
		if (isYearLeap(i)) {
			numberOfLeapYears += 1;
		}
	}
	return numberOfLeapYears;
}

export function getDiscount(birthDate) {
	const userDate = Date.parse(birthDate); // find milliseconds passed from 01.01.1970
	const currentDate = Date.now();
	const difference = currentDate - userDate; // find milliseconds passed from birth date
	const userYear = new Date(userDate).getFullYear();
	const currentYear = new Date().getFullYear();
	const numberOfLeapYears = getNumberOfLeapYears(userYear, currentYear);
	const days = (difference / 1000 / 60 / 60 / 24) - numberOfLeapYears;
	const age = Math.floor(days / 365); // find years passed from birth date
	if (age >= 20 && age <= 30) {
		return 'скидка 5 %';
	} else if (age > 30) {
		return 'скидка 7 %';
	} else {
		return 'скидка 3 %';
	}
};