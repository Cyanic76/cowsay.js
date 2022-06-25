const express = require("express");
const app = express();

app.get('/:text', (req, res) => {
	const text = req.params.text
	const length = text.length;
	let cow = "  "
	
	// Draw borders around the text
	for (let i = 0; i < length; i++){ cow += "_" }
	cow += `\n< ${text} >\n  `
	for (let j = 0; j < length; j++){ cow += "-" }
	
	// Draw cow
	cow += `\n         \\   ^__^ \n          \\  (oo)\\_______\n             (__)\\       )\\/\\\n                 ||----w |\n                 ||     ||\n    `
	
	res.json({message: text, cow: cow})
})

const server = app.listen(3000);
console.log("Listening on port 3000.")
