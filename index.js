// 
// by AK
// ak@mixpanel.com
// purpose: 

const moduleName = process.env.npm_package_name;
global.moduleName = moduleName;
require('dotenv').config();

//deps
const fetch = require('got');
const t = require('ak-tools');


//HTTP FUNCTION TRIGGER
exports.start = async (req, res) => {
	try {
		let data = await exports.main(req);
		res.set('Content-Type', 'application/json').status(200).send(JSON.stringify(data));
	}
	catch (e) {
		t.cLog({ error: e.message, stack: e.stack}, "script failure", `ERROR`);
		res.status(400).send(e);
	}
};

// //FILE TRIGGER
// exports.start = async (file, context) => {
// 	const details = {
// 		eventId: context.eventId,
// 		eventType: context.eventType,
// 		bucket: file.bucket,
// 		fileName: file.name,
// 		fileMeta: file.metageneration,
// 		created: file.timeCreated,
// 		updated: file.updated
// 	};
// 	await exports.main(details);
// 	return 1;

// };

// //PUB SUB TRIGGER
// //https://cloud.google.com/functions/docs/writing/write-event-driven-functions#background-functions
// exports.start = async (message, context) => {
// 	let def = { foo: "bar" };
// 	try {
// 		let config = t.objDefault(t.unBase64(message.data), def);
// 		let data = await main(config);
// 		return data;
// 	} catch (e) {
// 		t.cLog({ error: e.message, stack: e.stack, message }, "script failure", `ERROR`);
// 		throw e
// 	}
// };

exports.main = async function (config) {
	return {};
};
