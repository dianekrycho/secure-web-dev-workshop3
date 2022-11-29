// This file is used to map API calls (Presentation Layer) with the
// Business-Logic layer
/*
create: /locations
Update: /locations/:id
Request (Get All: /locations , Get One: /locations/:id)
Delete: /locations/:id
 */

const router = require('express').Router()
const locations = require('./locations.service');

//acceder à la liste de location
router.get('/locations', async (req, res) => {
	return res.status(200).send({locations: await locations.findAll()})
})

//acceder à une location à partir de son id
router.get('/locations/:id', async (req,res) => {
	res.status(200).send({location: await locations.query_id(req.params.id)})
})

// nouvelle localisation POST
router.post('/locations', async (req,res) => {
	res.status(200).send({location: await locations.add_loc(req.body)})
})
// modifier une localisation à partir de son id : PUT /locations/:id
/*router.put('/parkings/:id', async (req,res) => {
	res.status(200).send
})
 */

// supprimer une localisation : DELETE /locations
router.delete('/parkings/:id', async (req,res) => {
	res.status(200).send(await locations.delete_id(req.params.id))
})

module.exports = router
