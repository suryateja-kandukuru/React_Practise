import './App.css';
// import FragementExample from './components/FragementExample';
// import CompType from './components/componentTypes/CompType';
// import FuncType from './components/react-memo-functionalComponent/ParentComp'
// import SimpleRef from './components/refs/SimpleRef';
// import ForwardRefParent from './components/refs/ForwardRefParent';
// import PortalComp from './components/portals/ParentComp';
// import ParerntBoundary from './components/error-boundary/ParerntBoundary';
// import HigherComp from './components/higher-order-components/ParentComp';
// import ParentRender from './components/render-props/ParentRender';
// import ParentContext from './components/context-examples/ParentContext';
import GetComp from './components/http-examples/GetComp';
function App () {
  // parent comp is functiona component
  return (
    <div className="App">
      {/* <FragementExample /> 
      <CompType />
      <FuncType />
      <SimpleRef />
      <ForwardRefParent />
      <PortalComp />
      <ParerntBoundary />
      <HigherComp />
      <ParentRender />
      <ParentContext />
            */}
      <GetComp />
    </div>
  );
}

export default App;
