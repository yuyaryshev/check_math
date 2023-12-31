﻿const fs = require("fs")

function check_math(s) {
	let res = {correct:0, incorrect:0};
	const lines = s.split("\n");
	let lineIndex = 0;
	for(const line of lines) {
		lineIndex++;
		if(!line.trim().length) {
			continue;
		}
		const eq = line.split("=").join("==");
		try{
			const r = eval(eq);
			if(r) {
				res.correct++;
				console.log(`${lineIndex}>   ${line.trim()} - ок`)
			} else {
				res.incorrect++;
				console.log(`${lineIndex}>   ${line.trim()} - не верно!`)
			}
		} catch(e) {
			console.log(`${lineIndex}>   ${line.trim()} - не решен? Или что это? я не понимаю...`)
		}
	}
	return res;
}


const s = fs.readFileSync("./math.txt",'utf-8');
const res = check_math(s);
console.log(`\n Итого верно: ${res.correct}, неверно: ${res.incorrect}`);
