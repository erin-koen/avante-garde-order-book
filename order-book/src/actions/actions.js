
export const UPDATE_BOOK = 'UPDATE_BOOK'

export function updateBook(){
    // fetch data and declare it as variable. [1,2,3] is placeholder only
    const data = [1,2,3]
    return {
        type: UPDATE_BOOK,
        payload: data
    }
}