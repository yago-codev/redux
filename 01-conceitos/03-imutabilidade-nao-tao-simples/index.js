let state = {
    number: 123,
    name: 'Yago'
}

// função NÃO pura
const incrementNumber = () => {
    state.number++;
}
// incrementNumber();
// console.log(state); // { number: 124, name: 'Yago' }

// função NÃO pura
const incrementState = (state) => {
    state.number++;
}

const pureIncrementState = (state) => {
    const incrementedState = { ...state };
    return ++incrementedState.number;
}
pureIncrementState(state);
console.log(state);