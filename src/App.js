import Expenses from "./Expenses";
import "./components/Expenses.css";
import expenses from "./components/expensesData";

function App() {
  return (
    <div className="expenses">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
