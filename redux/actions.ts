export const categoryFilterChange = (category: string) => {
  return {
    type: 'filters/categoryFilterChange',
    payload: category
  }
}

export const categoryFilterRemove = (category: string) => {
  return {
    type: 'filters/categoryFilterRemove',
    payload: category
  }
}

export const navFilterHandle = (category: string) => {
  return {
    type: 'filter/navFilterHandle',
    payload: category
  }
}

export const sortFilterChange = (sortValue: string) => {
  return {
    type: 'filter/sortFilterChange',
    payload: sortValue
  }
}

export const searchFilterChange = (searchValue: string) => {
  return {
    type: 'filter/searchFilterChange',
    payload: searchValue
  }
}