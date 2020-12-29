export const arrayToObj = array => {
    const newObj = {}
    array.forEach(el =>(
        newObj[el.id] = el
    ))
    return newObj
}

export const objToArray = obj => {
    return Object.values(obj)
}

export const arrayOfIds = elements => {
    return elements.map(ele => ele.id)
}