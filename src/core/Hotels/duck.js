import types from './types'

export const hotels = (state = [], {type, payload}) => {
    switch (type) {
        case types.SET_HOTELS:
            return {
                ...payload,
            }
        case types.ADD_HOTELS:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
      }
}

