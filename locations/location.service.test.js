const locationService = require('./locations.service')
const Location = require('./locations.model')

// mock database => mock model
jest.mock('./locations.model')

/*  test structure
describe(' ', ()=>{
    it(' ', async ()=>{
        //function
        expect()
    })
}) */

beforeEach(()=>{
    jest.resetAllMocks()
})

// rajouter limit()
describe('Location findAll() ', ()=>{
    it('Should call find function ', async ()=>{
        Location.find.mockResolvedValue([1,2,3,4])
        expect(await locationService.findAll()).toEqual([1,2,3,4])
        expect(Location.find).toHaveBeenCalledTimes(1)
    })
})

describe('Location query_id(id) ', ()=> {
    it('Should get a location ', async () => {
        const mockLocation = {
            _id: ' ',
            filmName: ''
        }
        Location.findById.mockResolvedValue(mockLocation)

        expect(await locationService.query_id(' ')).toEqual(mockLocation)
        expect(Location.findById).toHaveBeenCalledTimes(1)
    })

    it('Should get a location ', async () => {
        jest.resetAllMocks()
        const mockLocation = null
        Location.findById.mockResolvedValue(mockLocation)

        expect(await locationService.query_id(' ')).rejects.toThrow()
        expect(Location.findById).toHaveBeenCalledTimes(1)
    })
})

describe('Location delete_id(id) ', ()=> {
    it('Should delete a location ', async () => {
        const mockLocation = {
            _id: ' ',
            filmName: ''
        }
        Location.findById.mockResolvedValue(mockLocation)
        expect(await locationService.delete_id(' ')).toEqual("Supprimé")
        expect(Location.findByIdAndDelete).toHaveBeenCalledTimes(1)
    })

    it('Should delete a location ', async () => {
        jest.resetAllMocks()
        const mockLocation = null
        Location.findById.mockResolvedValue(mockLocation)
        expect(await locationService.delete_id(' ')).rejects.toThrow()
        expect(Location.findByIdAndDelete).toHaveBeenCalledTimes(1)
    })
})

describe('Location add_loc(loc)) ', ()=> {
    it('Should add a location ', async () => {
        const mockLocation = {
            _id: ' ',
            filmName: 'exemple nom film'
        }

        Location.mockImplementation(()=>{
            return {save:jest.fn().mockResolvedValue(mockLocation)}
        })

        expect(await locationService.add_loc(mockLocation)).toEqual(mockLocation)
    })
})
