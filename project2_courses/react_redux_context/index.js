import ReactDOM from "react-dom";
import React from "react";


const Context = React.createContext()

const Parent = ({ name }) => {
    return (
        <div>
            <h1>Parent</h1>
            <Child name={name} />
        </div>
    );
};

const Child = ({ name }) => {
    return (
        <div>
            <h1>Child</h1>
            <Grandchild name={name} />
        </div>
    );
};

const Grandchild = ({ name }) => {
    return (
        <Context.Consumer>
            {(name) => (
                <div>
                    <h1>Grandchild</h1>
                    <h3>Name: {name}</h3>
                </div>
            )}
        </Context.Consumer>
    );
};

const App = () => {
    const name = "Andrew";

    return (
        <Context.Provider value={name}>
            <Parent />;
        </Context.Provider>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));