export const addToCards = (name) => {
    console.log('adding to cards');
    return {
        type: 'add',
        name
    }
}