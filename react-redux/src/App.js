import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import CakeContainerTwo from './components/CakeContainerTwo';
function App() {

  // Provider from react-redux is used to consumer the data from store and also prop store is provided to that.

  return (
    <Provider store = { store }>
      <div className="App">
      <CakeContainer />
      <CakeContainerTwo />
      </div>
    </Provider>
  );
}

export default App;
