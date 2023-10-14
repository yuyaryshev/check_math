const fs = require("fs")

function check_math(s) {
	let res = {correct:0, incorrect:0};
	const lines = s.split("\n");
	for(const line of lines) {
		if(!line.trim().length) {
			continue;
		}
		const eq = line.split("=").join("==");
		try{
			const r = eval(eq);
			if(r) {
				res.correct++;
				console.log(`${line.trim()} - ок`)
			} else {
				res.incorrect++;
				console.log(`${line.trim()} - не верно!`)
			}
		} catch(e) {
			console.log(`${line.trim()} - ЧТО это?`)
		}
	}
	return res;
}


const s = fs.readFileSync("./math.txt",'utf-8');
const res = check_math(s);
console.log(`\n Итого верно: ${res.correct}, неверно: ${res.incorrect}`);
