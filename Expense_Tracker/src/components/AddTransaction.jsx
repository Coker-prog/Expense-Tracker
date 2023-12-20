const AddTransaction = () => {
  return (
    <div>
      <h3 className="mb-2">Add Transaction</h3>
      <hr />
      <form>
        <div className="flex flex-col my-2">
          <label htmlFor="text"  className="my-2">Text</label>
          <input type="text" placeholder="Enter Text..." />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="amount" className="my-2">
            (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter Amount..." />
        </div>
        <button className="my-2  bg-green-600 w-full py-1">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
