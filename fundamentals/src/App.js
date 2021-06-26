import "./App.css";
import React from "react";
// import Greet from './components/Greeting'
// import Welcome from './components/Welcome'
// import Message from './components/Message.jsx'
// import Counter from './components/Counter.jsx'
// import EventHandlers from './components/EventHandlers'
// import Parent from './components/methodAsProps/Parent';
// import  CondRend from './components/conditionalRendering/ConditionalRendering.jsx'
// import SimpleList from './components/listRendering/SimpleList.jsx'
// import Style from './components/css-components/styleComponent.jsx'
// import SimpleForm from './components/SimpleForm.jsx'
import LifeParent from "./components/life-cylce-hooks/LifeParent.jsx";
function App() {
  return (
    <div className="App">
      {/* <p>Started Learning React js</p>
      <Welcome  name="suryateja" />
      <Greet name="Surya" />
      <Message />
      <Counter /> 
      <EventHandlers />
      <Parent />
      <CondRend />
      <SimpleList />
      <Style />
      <SimpleForm />
       */}
      <LifeParent />
    </div>
  );
}

export default App;
