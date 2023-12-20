import { useState } from "react";

const AddTransaction = () => {
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState("");
  return (
    <div>
      <h3 className="mb-2">Add Transaction</h3>
      <hr />
      <form>
        <div className="flex flex-col my-2">
          <label htmlFor="text" className="my-2">
            Text
          </label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value), console.log(text);
            }}
            type="text"
            name="text"
            placeholder="Enter Text..."
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="amount" className="my-2">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value), console.log(amount);
            }}
            type="number"
            name="amount"
            placeholder="Enter Amount..."
          />
        </div>
        <button className="my-2  bg-green-600 w-full py-1">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
