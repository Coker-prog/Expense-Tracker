const IncomeExpenses = () => {
  return (
    <div className=" flex items-center justify-evenly ">
        <div className="py-2  items-start">
            <h4>Income</h4>
            <p>+0.00</p>
        </div>
        <div className="bg-red-900 w-1 h-9"></div>
        <div className="">
            <h4>Expense</h4>
            <p>-$0.00</p>
        </div>
    </div>
  )
}

export default IncomeExpenses