import React from "react";

// we can also provide default value to providers
const Context = React.createContext("welcome");
const Provider = Context.Provider;
const Consumer = Context.Consumer;

export { Provider, Consumer, Context };
