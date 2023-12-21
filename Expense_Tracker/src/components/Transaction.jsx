import PropTypes from "prop-types";
const Transaction = (data) => {
    const sign = data.datas.amount < 0 ? '-' : '+';
  console.log(data);
  return (
    <>
    <div>
    <li   className={data.datas.amount <  0 ? 'minus' : 'plus'}>
        {data.datas.text} <span> {sign}${Math.abs(data.datas.amount)}</span>
      </li>
    </div>
      
    </>
  );
};
Transaction.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Transaction;
