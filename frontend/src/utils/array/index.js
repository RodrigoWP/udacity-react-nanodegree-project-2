'use strict'

export const updateObjectInArrayById = (array, object) => {
  return array.map((item, index) => {
    if (item.id !== object.id) {
      return item
    }

    return {
      ...item,
      ...object
    }
  })
}

export const removeObjectInArrayById = (array, id) => array.filter(item => item.id !== id)
