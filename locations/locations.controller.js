// This file is used to map API calls (Presentation Layer) with the
// Business-Logic layer
/*
create: /locations
Update: /locations/:id
Request (Get All: /locations , Get One: /locations/:id)
Delete: /locations/:id
 */

const router = require('express').Router()
const locationService = require('./locations.service');

//acceder à la liste de location
router.get('/locations', async (req, res) => {
	return res.status(200).send({locationService: await locationService.findAll()})
})

//acceder à une location à partir de son id
router.get('/locations/:id', async (req,res) => {
	res.status(200).send({location: await locationService.query_id(req.params.id)})
})

// nouvelle localisation
router.post('/locations', async (req,res) => {
	res.status(200).send({location: await locationService.add_loc(req.body)})
})

// modifier une localisation à partir de son id
router.patch('/locations/:id', async (req,res) => {
	res.status(200).send({location: await locationService.modify_loc(req.body)})
})

// supprimer une localisation
router.delete('/locations/:id', async (req,res) => {
	res.status(200).send(await locationService.delete_id(req.params.id))
})

module.exports = router
