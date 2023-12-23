import { useSelector } from "react-redux";

const Balalnce = () => {
  const { datas } = useSelector((state) => state.expenseSlice);

  const amounts = datas.map((data) => data.amount);
  const sum = amounts.reduce((sum, amounts) => {
    return (sum += amounts);
  }, 0);
  
  return (
    <div className="mb-4 text-2xl">
      <h4>Your Blance </h4>
      <h1>${sum}</h1>
    </div>
  );
};

export default Balalnce;
