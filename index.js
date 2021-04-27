'use strict'

import { getRandomGender, getRandomName, getRandomPhoneNumber, getClientCode, getRandomBirthDate, getDiscount } from './utils.js';
import Excel from 'exceljs';

// initialize new workbook
let workbook = new Excel.Workbook();
let worksheet = workbook.addWorksheet('Clients');

// add columns
worksheet.columns = [
	{ header: 'ФИО;', key: 'name' },
	{ header: 'Телефон;', key: 'phone' },
	{ header: 'Электронная почта;', key: 'email' },
	{ header: 'Согласие на получение SMS;', key: 'isSendingSmsOk' },
	{ header: 'Пол;', key: 'gender' },
	{ header: 'Адрес;', key: 'address' },
	{ header: 'Заметка;', key: 'note' },
	{ header: 'Дата рождения;', key: 'birthdate' },
	{ header: 'Группа (статус клиента);', key: 'group' },
	{ header: 'Источник клиента;', key: 'source' },
	{ header: 'Код клиента;', key: 'code' },
	{ header: 'Статус в программе лояльности;', key: 'status' },
	{ header: 'Баланс счета клиента;', key: 'clientsAccount' },
	{ header: 'Баланс бонусного счета клиента;', key: 'clientsBonusAccount' },
];

// format columns
worksheet.columns.forEach(column => {
	column.width = column.header.length < 12 ? 12 : column.header.length
})

worksheet.getRow(1).font = { bold: true }

// fill the columns with data
for (let i = 1; i < 50; i += 1) {
	worksheet.addRow({id: 1, gender: getRandomGender(),
		phone: getRandomPhoneNumber(),
		code: getClientCode(worksheet.getRow(i).getCell('code').value, worksheet.getRow(i - 1).getCell('code').value),
		birthdate: getRandomBirthDate()});
}

for (let i = 2; i <= 50; i += 1) {
	let currentName = worksheet.getRow(i).getCell('name');
	const currentGender = worksheet.getRow(i).getCell('gender').value;
	currentName.value = getRandomName(currentGender);
}

for (let i = 2; i <= 50; i += 1) {
	const currentBirthDate = worksheet.getRow(i).getCell('birthdate').value;
	const currenStatus = worksheet.getRow(i).getCell('status');
	currenStatus.value = getDiscount(currentBirthDate);
}

// save the table
workbook.xlsx.writeFile('/home/darusya/Документы/Clients.xlsx')