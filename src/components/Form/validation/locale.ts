/* CUSTOMIZED COPY OF yup/lib/locale */
/* eslint-disable */

import { type LocaleObject } from "yup";
import { printValue } from "yup";

const cs = {
	mixed: {
		default: "Toto pole není validní",
		required: "Toto pole je povinné.",
		oneOf: "Toto pole musí obsahovat jednu z následujících hodnot: ${values}",
		notOneOf: "Toto pole nesmí obsahovat ani jednu z následujících hodnot: ${values}",
		notType: ({
			path,
			type,
			value,
			originalValue,
		}: {
			path: string;
			type: string;
			value: any;
			originalValue: any;
		}) => {
			const isCast = originalValue != null && originalValue !== value;
			let msg =
				`${path} musí být typu \`${type}\`` +
				`ale konečná hodnota byla: \`${printValue(value, true)}\`` +
				(isCast ? ` (z hodnoty \`${printValue(originalValue, true)}\`).` : ".");

			if (value === null) {
				msg += `\n Pokud je "null" zamýšleno jako hodnota prázného pole, označte ho jako \`.nullable()\``;
			}

			return msg;
		},
		defined: "Toto pole musí být definováno",
	},
	string: {
		length: "Toto pole musí mít přesně ${length} znaků.",
		min: "Toto pole musí mít nejméně ${min} znaků",
		max: "Toto pole musí mít maximálně ${max} znaků",
		matches: 'Toto pole musí splňovat následující: "${regex}"',
		email: "Nevalidní emailová adresa.",
		url: "Nevalidní URL adresa.",
		uuid: "Toto pole musí být validní UUID",
		trim: "Toto pole nesmí začínat ani končit mezerami",
		lowercase: "Toto pole musí začínat malým písmenem",
		uppercase: "Toto pole musí začínat velkým písmenem",
	},
	number: {
		min: "Toto pole musí být větší nebo rovno ${min}",
		max: "Toto pole musí být menší nebo rovno ${max}",
		lessThan: "Toto pole musí být menší než ${less}",
		moreThan: "Toto pole musí být větší než ${more}",
		positive: "Toto pole musí být kladné číslo",
		negative: "Toto pole musí být záporné číslo",
		integer: "Toto pole musí být celé číslo",
	},
	date: {
		min: "Datum musí být po ${min}.",
		max: "Nezadávejte data starší, než ${max}.",
	},
	boolean: {
		isValue: "Toto pole musí být ${value}",
	},
	object: {
		noUnknown: "Toto pole má nespecifikované klíče: ${unknown}",
	},
	array: {
		min: "Toto pole musí mít nejméně ${min} položek",
		max: "Toto pole musí mít méně než ${max} položek",
		length: "Toto pole musí mít ${length} položek",
	},
};

const locale: Record<string, LocaleObject> = {
	cs,
};

export default locale;
