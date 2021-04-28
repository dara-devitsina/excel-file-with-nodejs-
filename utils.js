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

export function getDiscount(birthDate) {
	const userDate = Date.parse(birthDate); // find milliseconds passed from 01.01.1970
	const currentDate = Date.now();
	const difference = currentDate - userDate; 
	const age = Math.floor(difference / 1000 / 60 / 60 / 24 / 365); // find years passed from 01.01.1970
	if (age >= 20 && age <= 30) {
		return 'скидка 5 %';
	} else if (age > 30) {
		return 'скидка 7 %';
	} else {
		return 'скидка 3 %';
	}
};