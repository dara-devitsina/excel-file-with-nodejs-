import fs from 'fs';

function normalizeNames (nameList) {
	return nameList.split('\n');
};

export const femaleNames = normalizeNames(fs.readFileSync("/home/darusya/Документы/names/Female names", "utf8").trim());

export const femaleMiddlenames = normalizeNames(fs.readFileSync("/home/darusya/Документы/names/Female middlenames", "utf8").trim());


export const femaleSurnames = normalizeNames(fs.readFileSync("/home/darusya/Документы/names/Female surnames", "utf8").trim());

export const maleNames = normalizeNames(fs.readFileSync("/home/darusya/Документы/names/Male names", "utf8").trim());

export const maleMiddlenames = normalizeNames(fs.readFileSync("/home/darusya/Документы/names/Male middlenames", "utf8").trim());

export const maleSurnames = normalizeNames(fs.readFileSync("/home/darusya/Документы/names/Male surnames", "utf8").trim());