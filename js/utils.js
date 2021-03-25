const generateId = (len) => {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
	const charactersLength = characters.length;

	for (let i = 0; i < len; i += 1) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
};

const getValuesFromForm = (form) => {
	const values = {};

	for (let i = 0; i < form.length; ++i) {
		if (form[i].nodeName === 'INPUT') {
			values[form[i].name] = form[i].value;
		}
	}

	return values;
};