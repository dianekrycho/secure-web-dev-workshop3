// This file holds the Business-Logic layer, interacting with Data Layer
let Location = require('./locations.model');

function findAll () {
	return Location.find()//.limit(20)
}
module.exports.findAll = findAll

async function query_id(id){
	try {
		return (await Location.findById(id))
	}
	catch (e){
		console.error(e)
		return null
	}
}
module.exports.query_id = query_id


async function delete_id(id){
	try {
		Location.findByIdAndDelete(id)
		return("Supprimé")
	}
	catch (e){
		console.error(e)
		return null
	}
}
module.exports.delete_id = delete_id

async function add_loc(loc){
	try {
		const location = new Location(loc)
		return location.save()
	}
	catch (e){
		console.error(e)
		return null
	}
}
module.exports.add_loc = add_loc

async function modify_loc(body){
	try {
		await Location.findByIdAndUpdate({ _id: body._id},body);
		return ("modifié" + body)
	}
	catch (e){
		console.error(e)
		return null
	}
}
module.exports.modify_loc = modify_loc
