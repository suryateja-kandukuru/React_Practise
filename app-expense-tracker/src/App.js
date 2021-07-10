import "./App.css";
import Header from "./components/Header.js";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import History from "./components/History";
import AddNewTransation from "./components/AddNewTransation";
import AppStore from './globalState/AppState'
function App() {
  return (
    <div className="App">
      <div className="container">
        <AppStore>
        <Header />
        <Balance />
        <IncomeExpense />
        <History />
        <AddNewTransation />
        </AppStore>
        
      </div>
    </div>
  );
}

export default App;
