import Expenses from "./components/Expenses";
import "./components/Expenses.css";
import expenses from "./expensesData";

function App() {
  return (
    <div className="expenses">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
