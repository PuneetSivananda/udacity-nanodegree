function createStore(){
    let state;
    let listeners = []
    const getState = () => state

    const subscribe = (listener)=>{
        listeners.push(listener)
        return ()=>{
            listeners = listeners.filter((l)=> l.listerners) 
        }
    }
    return {
        getState,
        subscribe
    }
}


const store = createStore()

store.subscribe(()=>{
    console.log("the new state is ", store.getState())
})

const unsubscribe = store.subscribe(()=>{
    console.log("the store changed")
})

unsubscribe()