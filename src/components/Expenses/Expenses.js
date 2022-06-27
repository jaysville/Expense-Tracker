import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
const Expenses = (props) => {
  const [selectYear, setSelectYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setSelectYear(selectedYear);
  };
  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredYear} />
        <ExpenseList items={filteredYear} />
      </Card>
    </div>
  );
};

export default Expenses;
