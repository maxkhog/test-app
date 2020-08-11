import types from './types'

const addHotels = (hotels) => {
    return {
        type: types.ADD_HOTELS,
        payload: hotels
    }
}

const setHotels = (hotels) => {
    return {
        type: types.SET_HOTELS,
        payload: hotels,
    }
}

export {
    addHotels,
    setHotels,
}