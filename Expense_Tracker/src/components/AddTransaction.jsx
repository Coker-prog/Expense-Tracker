import { useState } from "react";
import { useDispatch } from "react-redux";
import { create_datas } from "../features/expenseSlice";
// import { useSelector } from "react-redux";

const AddTransaction = () => {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault()

    const data = {amount, text}
    console.log(data)
    fetch('  http://localhost:3000/datas',{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .then((res)  => {
      dispatch(create_datas(res))
    })
  }

  return (
    <div>
      <h3 className="mb-2">Add Transaction</h3>
      <hr />
      <form   onSubmit={submit}>
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
