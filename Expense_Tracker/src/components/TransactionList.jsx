import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_datas } from "../features/expenseSlice";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { datas } = useSelector((state) => state.expenseSlice);
  console.log(datas);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/datas")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        dispatch(fetch_datas(res));
      });
  }, [dispatch]);
  return (
    <div className="my-5">
      <h3 className="pb-2">History</h3>
      <hr />
      <ul>
        {datas && datas.map((data) => (
          <div className="preview" key={data.id}>
            <Transaction data={data}  />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
