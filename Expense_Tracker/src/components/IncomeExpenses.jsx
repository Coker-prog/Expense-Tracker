import { useSelector } from "react-redux";
const IncomeExpenses = () => {
  const { datas } = useSelector((state) => state.expenseSlice);

  const amounts = datas.map((data) => data.amount);

  const income = amounts
    .filter((amounts) => amounts > 0)
    .reduce((income, amount) => income + amount, 0);

  const expenses = amounts
    .filter((amounts) => amounts < 0)
    .reduce((income, amount) => income + amount, 0);

  return (
    <div className=" flex items-center justify-evenly ">
      <div className="py-2  items-start">
        <h4>Income</h4>
        <p>${income}</p>
      </div>
      <div className="bg-red-900 w-1 h-9"></div>
      <div className="">
        <h4>Expense</h4>
        <p>${expenses}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
