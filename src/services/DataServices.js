import { mockData } from './Data'

export const getAsyncHotelsData = (start, end) => {
    return new Promise ((resolve) => setTimeout(() => {
        resolve (mockData.slice(start, end))
    }, 1000))
}

const getCountryList = () => {
    return Object.keys(mockData.reduce((acc, {region}) => {
        if (!acc[region]) {
            return {
                ...acc,
                [region]: true
            }
        }
        return acc;
    },{})).sort()
}

export const getAsyncCountryList = () => {
    return new Promise((resolve) => setTimeout(() => {
        resolve(getCountryList())
    }, 1000))
}