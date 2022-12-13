// This file holds the Business-Logic layer, interacting with Data Layer
let Location = require('./locations.model');

function findAll () {
	return Location.find()//.limit(20)
}
module.exports.findAll = findAll

async function query_id(id){
	return (await Location.findById(id))
}
module.exports.query_id = query_id


async function delete_id(id){
	Location.findByIdAndDelete(id)
	return("Supprimé")
}
module.exports.delete_id = delete_id

async function add_loc(loc){
	const location = new Location(loc)
	return location.save()
}
module.exports.add_loc = add_loc
