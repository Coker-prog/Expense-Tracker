import AddTransaction from "./components/AddTransaction"
import Balalnce from "./components/Balance/Balalnce"
import Header from "./components/Header"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"

const App = () => {
  return (
    <>
    <Header />
    <div className="container">
      <Balalnce/>
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
    </>
  )
}

export default App