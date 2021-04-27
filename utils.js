import { femaleNames, femaleMiddlenames, femaleSurnames, maleNames, maleMiddlenames, maleSurnames} from './names.js';
import { getRandomNumber } from './random-number.js';

const genders = ['м', 'ж'];

export function getRandomGender() {
	return genders[getRandomNumber(0, 1)];
};

export function getRandomName(gender) {
	let name, middlename, surname;
	if (gender === 'ж') {
		name = femaleNames[getRandomNumber(0, femaleNames.length - 1)];
		middlename = femaleMiddlenames[getRandomNumber(0, femaleMiddlenames.length - 1)];
		surname = femaleSurnames[getRandomNumber(0, femaleSurnames.length - 1)];
	} if (gender === 'м') {
		name = maleNames[getRandomNumber(0, maleNames.length - 1)];
		middlename = maleMiddlenames[getRandomNumber(0, maleMiddlenames.length - 1)];
		surname = maleSurnames[getRandomNumber(0, maleSurnames.length - 1)];
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
	if (previous === 'Код клиента;') {
		return 1;
	} if (previous === 1) {
		return 2;
	} else {
		return previous + beforePrevious;
	}
};

export function getRandomBirthDate() {
	const day = getRandomNumber(1, 31);
	const month = getRandomNumber(1, 12);
	const year = getRandomNumber(1970, 2000);
	if (day < 10 && month < 10) {
		return `0${day}.0${month}.${year}`;
	} else if (day < 10) {
		return `0${day}.${month}.${year}`;
	} else if (month < 10) {
		return `${day}.0${month}.${year}`;
	} else {
		return `${day}.${month}.${year}`;
	}
};

export function getDiscount(birthDate) {
	const currentDate = new Date();
	const currentDay = currentDate.getDate();
	const currentMonth = currentDate.getMonth();
	const currentYear = currentDate.getFullYear();

	const splitDate = birthDate.split('.');

	const userDay = splitDate[0];
	const userMonth = splitDate[1];
	const userYear = splitDate[2];

	if (currentYear - userYear > 20 && currentYear - userYear < 30) {
		return 'скидка 5%';
	}
	
	if (currentYear - userYear > 30) {
		return 'скидка 7%';
	}

	if (currentYear - userYear === 20) {
		if (currentMonth - userMonth === 0) {
			if (currentDay - userDay <= 0) {
				return 'скидка 5%';
			} else {
				return 'скидка 3%';
			}
		} if (currentMonth - userMonth >= 0) {
			return 'скидка 5%';
		} if (currentMonth - userMonth <= 0) {
			return 'скидка 3%';
		}
	}
	
	if (currentYear - userYear === 30) {
		if (currentMonth - userMonth === 0) {
			if (currentDay - userDay <= 0) {
				return 'скидка 7%';
			} else {
				return 'скидка 5%';
			}
		} if (currentMonth - userMonth >= 0) {
			return 'скидка 7%';
		} if (currentMonth - userMonth <= 0) {
			return 'скидка 5%';
		}
	} if (currentYear - userYear < 20) {
		return 'скидка 3%';
	}
};
