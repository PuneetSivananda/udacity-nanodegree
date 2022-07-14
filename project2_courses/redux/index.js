//Library Code
function createStore(reducer) {
    let state;
    let listeners = []
    const getState = () => state

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l.listerners)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}


// App Code
function todos(state = [], action) {
    switch (action.type) {
        case "ADD_TODO":
            return state.concat([action.todo])    
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.id)
        case "TOGGLE_TODO":
            return state.map((todo) => todo.id !== action.id ? todo : Object.assign({}, todo, { complete: !todo.complete }))
        default:
            return state;
    }
}

// When you create a store pass the specific reducer fuction on the app data
const store = createStore(todos)
store.subscribe(() => {
    console.log("The new state is ", store.getState())
})

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 0,
        name: "Learn Redux",
        complete: false
    }
})

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 1,
        name: "Learn CSS",
        complete: false
    }
})

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 2,
        name: "Learn React",
        complete: false
    }
})