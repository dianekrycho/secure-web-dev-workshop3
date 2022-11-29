// This file holds the Business-Logic layer, interacting with Data Layer
let Location = require('./locations.model');

function findAll () {
	return Location.find({}).limit(20).lean()
}
module.exports.findAll = findAll

async function query_id(id){
	return (await Location.findById(id).exec())
}
module.exports.query_id = query_id

async function query_filmName(n){
	return(await Location.find({filmName : n}).exec())
}
module.exports.query_filmName = query_filmName

async function delete_id(id){
	Location.findByIdAndDelete(id)
	return("Supprimé")
}
module.exports.delete_id = delete_id

async function add_loc(loc){
	await loc.save()
	return("Ajoutée")
}
module.exports.add_loc = add_loc
